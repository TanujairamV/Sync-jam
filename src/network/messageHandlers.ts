import { JamConnection } from '../types/types'
import { TrackInfo, Member } from '../types/jam'
import { getTrack, getQueue } from '../spotify/api'
import { calculateDrift, predictPosition, getDriftState} from "../utils/sync"

type RefCurrent<T> = { current: T }

type MessageHandlerRefs = {
    isHost: boolean
    connected: boolean
    guestControls: boolean
    jamId: string
    targetUri: string | null
    ignoreSync: boolean
    isPlaying: boolean
}

type MessageHandlerDeps = {
    refs: RefCurrent<MessageHandlerRefs>
    lastHostMsg: RefCurrent<number>
    memberRegistry: RefCurrent<Map<string, { name: string; image: string }>>
    cachedUser: RefCurrent<{ name: string; image: string }>
    seekTimers: RefCurrent<ReturnType<typeof setTimeout>[]>
    buildMembers: () => Member[]
    addToQueue: (uri: string) => any
    removeFromQueue: (uri: string, uid?: string) => any
    broadcast: (d: any) => void
    setMembers: (value: Member[] | ((prev: Member[]) => Member[])) => void
    setQueue: (value: TrackInfo[] | ((prev: TrackInfo[]) => TrackInfo[])) => void
    setNowPlaying: (value: TrackInfo | null | ((prev: TrackInfo | null) => TrackInfo | null)) => void
    setHostName: (value: string | ((prev: string) => string)) => void
    setGuestControls: (value: boolean | ((prev: boolean) => boolean)) => void
    setIsPlaying: (value: boolean | ((prev: boolean) => boolean)) => void
    setProgress: (value: number | ((prev: number) => number)) => void
    setDuration: (value: number | ((prev: number) => number)) => void
    setPing: (value: number | ((prev: number) => number)) => void
    setError: (value: string | null | ((prev: string | null) => string | null)) => void
    leaveJam: () => void
    cmdThrottle: RefCurrent<Map<string, number>>
    queueRef: RefCurrent<TrackInfo[]>
    pendingQueueRestore: RefCurrent<TrackInfo[]>
    pendingClockSync: RefCurrent<Map<string, { t0: number }>>
    clockOffset: RefCurrent<number>
    clockRtt: RefCurrent<number>
    clockConfidence: RefCurrent<number>
}

const consumeQueue = (
    uri: string,
    deps: MessageHandlerDeps
) => {
    const idx = deps.queueRef.current.findIndex(
        (t: any) => t.uri === uri
    )

    if (idx < 0) return

    const q = deps.queueRef.current.slice(idx + 1)

    deps.queueRef.current = q
    deps.setQueue(q)
}

export const handleJoin = async (d: any, conn: JamConnection, deps: MessageHandlerDeps) => {
    const r = deps.refs.current
    if (!r.isHost) return
    deps.memberRegistry.current.set(conn.id, { name: d.name || 'Listener', image: d.image || '' })
    const all = deps.buildMembers()
    deps.setMembers(all)
    conn.send({
        type: 'INIT',
        np: getTrack(),
        queue: await getQueue(),
        host: deps.cachedUser.current.name,
        gc: r.guestControls,
        playing: (Spicetify as any).Player.isPlaying(),
        members: all,
        progress: (Spicetify as any).Player.getProgress(),
        duration: (Spicetify as any).Player.getDuration()
    })
    if ((Spicetify as any).Player.data?.item) {
        conn.send({
            type: 'PLAY',
            uri: (Spicetify as any).Player.data.item.uri,
            pos: (Spicetify as any).Player.getProgress(),
            ts: Date.now(),
            paused: !(Spicetify as any).Player.isPlaying()
        })
    }
    deps.broadcast({ type: 'MEMBERS', members: all })
}

export const handleInit = (d: any, deps: MessageHandlerDeps) => {
    if (d.np) {
        deps.setNowPlaying(d.np)
        deps.refs.current.targetUri = d.np.uri
    }

    if (d.queue) {
        let q = d.queue

        if (d.np?.uri) {
            const idx = q.findIndex(
                (t: any) => t.uri === d.np.uri
            )
            if (idx >= 0) {
                q = q.slice(idx + 1)
            }
        }
        deps.queueRef.current = q
        deps.setQueue(q)
    }

    if (d.host) deps.setHostName(d.host)
    if (d.members) deps.setMembers(d.members)
    if (d.gc !== undefined) deps.setGuestControls(d.gc)
    if (d.playing !== undefined) deps.setIsPlaying(d.playing)
    if (d.progress !== undefined) deps.setProgress(d.progress)
    if (d.duration !== undefined) deps.setDuration(d.duration)
}

export const handleMembers = (d: any, deps: MessageHandlerDeps) => {
    deps.setMembers(d.members)
}

export const handleGCtrl = (d: any, deps: MessageHandlerDeps) => {
    deps.setGuestControls(d.on)
}

export const handleCmd = (d: any, conn: JamConnection, deps: MessageHandlerDeps) => {
    const r = deps.refs.current
    if (!r.isHost || !r.guestControls) return
    if (Date.now() - (deps.cmdThrottle.current.get(conn.id) || 0) < 500) return
    deps.cmdThrottle.current.set(conn.id, Date.now())
    if (d.a === 'play') (Spicetify as any).Player.play()
    else if (d.a === 'pause') (Spicetify as any).Player.pause()
    else if (d.a === 'next') (Spicetify as any).Player.next()
    else if (d.a === 'back') (Spicetify as any).Player.back()
    else if (d.a === 'seek') (Spicetify as any).Player.seek(d.pos)
    else if (d.a === 'playuri') {
        consumeQueue(d.uri, deps)
        deps.pendingQueueRestore.current = deps.queueRef.current
        deps.broadcast({ type: 'Q', queue: deps.queueRef.current })
        deps.refs.current.targetUri = d.uri
            ; (Spicetify as any).Player.playUri(d.uri)
    }
}

export const handleKick = (_d: any, deps: MessageHandlerDeps) => {
    deps.leaveJam()
    deps.setError('Removed from Jam');
    (Spicetify as any).showNotification('Kicked from Jam')
}

export const handlePlay = async (d: any, deps: MessageHandlerDeps) => {
    console.log(
        "[GUEST] PLAY",
        d.uri,
        d.pos,
        d.paused,
        Date.now()
    )
    const r = deps.refs.current
    if (!r.isHost) {
        const curUri = (Spicetify as any).Player.data?.item?.uri
        const trackChanged = curUri !== d.uri

        r.targetUri = d.uri

        if (trackChanged) {
            deps.setProgress(0)
            consumeQueue(d.uri, deps)
        }


        if (d.paused) {
            if (trackChanged) {
                r.ignoreSync = true
                deps.setIsPlaying(false)
                    ; (Spicetify as any).Player.playUri(d.uri).then(() => {
                        setTimeout(() => { (Spicetify as any).Player.pause(); r.ignoreSync = false }, 150)
                    }).catch(() => { r.ignoreSync = false })
            } else {
                (Spicetify as any).Player.pause()
                deps.setIsPlaying(false)
            }
        } else if (!trackChanged) {
            const predicted = predictPosition(
                d.pos,
                d.ts + (
                    deps.clockConfidence.current >= 3
                    ? deps.clockOffset.current
                    : 0
                ),
                !d.paused
            )
            const localProgress = (Spicetify as any).Player.getProgress()
            const drift = calculateDrift(localProgress, predicted)

            switch (getDriftState(drift)) {
                case "ignore":
                    break
                case "soft":
                    if (Math.abs(drift) > 250) {
                        ;(Spicetify as any).Player.seek(predicted)
                    }
                    break
                case "hard":
                    ; (Spicetify as any).Player.seek(predicted)
                    break
            }

        } else {
            r.ignoreSync = true
            deps.setIsPlaying(true)
                ; (Spicetify as any).Player.playUri(d.uri)
                    .then(() => {
                        const seekMs = predictPosition(
                            d.pos,
                            d.ts + (
                                deps.clockConfidence.current >= 3
                                ? deps.clockOffset.current
                                : 0
                            ),
                            !d.paused
                        )
                        const sid = setTimeout(() => {
                            try {
                                const current = (Spicetify as any).Player.getProgress()
                                const drift = calculateDrift(current, seekMs)

                                switch (getDriftState(drift)) {
                                    case "ignore":
                                        break
                                    case "soft":
                                        if (Math.abs(drift) > 250) {
                                            ; (Spicetify as any).Player.seek(seekMs)
                                        }
                                        break
                                    case "hard":
                                        ; (Spicetify as any).Player.seek(seekMs)
                                        break
                                }        
                            } finally {
                                r.ignoreSync = false
                            }
                        }, Math.max(
                            50,
                            Math.min(150, Date.now() - d.ts)
                        )
                        )
                        deps.seekTimers.current.push(sid)
                    })
                    .catch(() => {
                        r.ignoreSync = false
                    })
        }
    }
    if (d.np) deps.setNowPlaying(d.np)
}

export const handlePause = (_d: any, deps: MessageHandlerDeps) => {
    if (!deps.refs.current.isHost) {
        ; (Spicetify as any).Player.pause()
        deps.setIsPlaying(false)
    }
}

export const handleSeek = (d: any, deps: MessageHandlerDeps) => {
    if (!deps.refs.current.isHost) {
        const predicted = predictPosition(
            d.pos,
            d.ts + (
                deps.clockConfidence.current >= 3
                ? deps.clockOffset.current
                : 0
            ),
            !d.paused
        )
        const local = (Spicetify as any).Player.getProgress()
        const drift = calculateDrift(local, predicted)

        switch (getDriftState(drift)) {
            case "ignore":
                break
            case "soft":
                if (Math.abs(drift) > 250) {
                    Spicetify.Player.seek(predicted)
                }
                break
            case "hard":
                Spicetify.Player.seek(predicted)
                break
        }
    }
}

export const handlePs = (d: any, deps: MessageHandlerDeps) => {
    if (!deps.refs.current.isHost) {
        deps.setIsPlaying(d.p)
        if (d.pos !== undefined) deps.setProgress(d.pos)
        if (d.dur !== undefined) deps.setDuration(d.dur)
    }
}

export const handleAddQ = (d: any, deps: MessageHandlerDeps) => {
    if (deps.refs.current.isHost) deps.addToQueue(d.uri)
}

export const handleRmQ = (d: any, deps: MessageHandlerDeps) => {
    if (deps.refs.current.isHost) deps.removeFromQueue(d.uri, d.uid)
}

export const handleQ = (
    d: any,
    deps: MessageHandlerDeps
) => {
    deps.queueRef.current = d.queue
    deps.setQueue(d.queue)
}

export const handleTsReq = (
    d: any,
    conn: JamConnection,
    deps: MessageHandlerDeps
) => {
    if (!deps.refs.current.isHost)
        return

    conn.send({
        type: "TS_RESP",
        id: d.id,
        t0: d.t0,
        t1: Date.now()
    })
}

export const handleTsResp = (
    d: any,
    deps: MessageHandlerDeps
) => {
    const pending =
        deps.pendingClockSync.current.get(d.id)

    if (!pending)
        return

    deps.pendingClockSync.current.delete(d.id)

    const t3 = Date.now()
    const rtt = t3 - pending.t0

    const offset =
        d.t1 - (pending.t0 + rtt / 2)

    if (
        deps.clockConfidence.current === 8 ||
        rtt < deps.clockRtt.current
    ) {
        deps.clockOffset.current = offset
        deps.clockRtt.current = rtt
        if (deps.clockConfidence.current < 8) {
            deps.clockConfidence.current++
        }
    }
}

export const handlePong = (d: any, deps: MessageHandlerDeps) => {
    deps.setPing(Date.now() - d.t0)
}

export const handleSync = async (
    _d: any,
    conn: JamConnection,
    deps: MessageHandlerDeps
) => {
    if (
        deps.refs.current.isHost &&
        (Spicetify as any).Player.data?.item
    ) {

        /*
                conn.send({
                    type: 'PLAY',
                    uri: (Spicetify as any).Player.data.item.uri,
                    pos: (Spicetify as any).Player.getProgress(),
                    ts: Date.now(),
                    np: getTrack(),
                    paused: !(Spicetify as any).Player.isPlaying()
                })
        */

        conn.send({
            type: 'Q',
            queue: await getQueue()
        })
    }
}

export const onData = async (d: any, conn: JamConnection, deps: MessageHandlerDeps) => {
    const r = deps.refs.current
    if (!r.isHost) deps.lastHostMsg.current = Date.now()
    switch (d.type) {
        case 'JOIN': return handleJoin(d, conn, deps)
        case 'INIT': return handleInit(d, deps)
        case 'MEMBERS': return handleMembers(d, deps)
        case 'GCTRL': return handleGCtrl(d, deps)
        case 'CMD': return handleCmd(d, conn, deps)
        case 'KICK': return handleKick(d, deps)
        case 'PLAY': return handlePlay(d, deps)
        case 'PAUSE': return handlePause(d, deps)
        case 'SEEK': return handleSeek(d, deps)
        case 'PS': return handlePs(d, deps)
        case 'ADD_Q': return handleAddQ(d, deps)
        case 'RM_Q': return handleRmQ(d, deps)
        case 'Q': return handleQ(d, deps)
        case 'TS_REQ': return handleTsReq(d, conn, deps)
        case 'TS_RESP': return handleTsResp(d, deps)
        case 'PONG': return handlePong(d, deps)
        case 'SYNC': return await handleSync(d, conn, deps)
    }
}