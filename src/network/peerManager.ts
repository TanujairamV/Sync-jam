import { DataConnection, Peer } from 'peerjs'
import { Member, TrackInfo } from '../types/jam'
import { fetchUserAsync, getTrack } from '../spotify/player'
import { PEER_CONFIG } from './peerConfig'

type Setter<T> = (value: T | ((prev: T) => T)) => void

type UserRef = { current: { name: string; image: string } }
type PromiseRef = { current: Promise<{ name: string; image: string }> | null }
type ConnsRef = { current: Map<string, DataConnection> }
type ReconnectAttemptRef = { current: number }
type ReconnectTimerRef = { current: ReturnType<typeof setTimeout> | null }

export type SetupConnFn = (conn: DataConnection) => void

export const setupConn = (
    conn: DataConnection,
    conns: ConnsRef,
    onData: (d: any, conn: DataConnection) => Promise<void>,
    onClose: (peerId: string) => void
) => {
    conn.on('open', () => conns.current.set(conn.peer, conn))
    conn.on('data', (d: any) => onData(d, conn))
    conn.on('close', () => {
        conns.current.delete(conn.peer)
        onClose(conn.peer)
    })
}

export const startJam = async (params: {
    retries?: number
    userPromise: PromiseRef
    cachedUser: UserRef
    setJamId: Setter<string>
    setIsHost: Setter<boolean>
    setConnected: Setter<boolean>
    setError: Setter<string | null>
    setHostName: Setter<string>
    setMembers: Setter<Member[]>
    setNowPlaying: Setter<TrackInfo | null>
    setIsPlaying: Setter<boolean>
    setProgress: Setter<number>
    setDuration: Setter<number>
    refreshQueue: () => Promise<void>
    setupConn: SetupConnFn
}): Promise<Peer> => {
    const retries = params.retries || 0
    const me = await (params.userPromise.current || fetchUserAsync())
    params.cachedUser.current = me
    const genId = () => Math.random().toString(36).substring(2, 8).toUpperCase()
    const p = new Peer(genId(), PEER_CONFIG)

    return new Promise<Peer>((res, rej) => {
        p.on('open', id => {
            params.setJamId(id)
            params.setIsHost(true)
            params.setConnected(true)
            params.setError(null)
            params.setHostName(me.name)
            params.setMembers([{ id: 'host', name: me.name, image: me.image, isHost: true }])
            const t = getTrack()
            if (t) params.setNowPlaying(t)
            params.setIsPlaying((Spicetify as any).Player.isPlaying())
            params.setProgress((Spicetify as any).Player.getProgress())
            params.setDuration((Spicetify as any).Player.getDuration())
            setTimeout(params.refreshQueue, 500)
            res(p)
        })

        p.on('connection', params.setupConn)

        p.on('error', e => {
            if ((e as any).type === 'id-taken' && retries < 5) {
                p.destroy()
                startJam({ ...params, retries: retries + 1 }).then(res).catch(rej)
            } else {
                params.setError(`Connection error: ${(e as any).type}`)
                rej(e)
            }
        })
    })
}

export const joinJam = async (params: {
    id: string
    name?: string
    userPromise: PromiseRef
    cachedUser: UserRef
    conns: ConnsRef
    setJamId: Setter<string>
    setIsHost: Setter<boolean>
    setConnected: Setter<boolean>
    setError: Setter<string | null>
    setMembers: Setter<Member[]>
    leaveJam: () => void
    reconnectAttempt: ReconnectAttemptRef
    reconnectTimer: ReconnectTimerRef
    setupConn: SetupConnFn
    onData: (d: any, conn: DataConnection) => Promise<void>
}): Promise<Peer> => {
    const me = await (params.userPromise.current || fetchUserAsync())
    params.cachedUser.current = me
    const cleanId = params.id.includes('jam=') ? params.id.split('jam=')[1] : params.id.trim()
    const p = new Peer(PEER_CONFIG)

    return new Promise<Peer>((res, rej) => {
        let settled = false
        const timeout = setTimeout(() => {
            if (!settled) {
                settled = true
                p.destroy()
                const msg = 'Connection timed out — check the Jam ID and try again'
                params.setError(msg)
                rej(new Error(msg))
            }
        }, 10000)

        const settle = (fn: () => void) => {
            if (settled) return
            settled = true
            clearTimeout(timeout)
            fn()
        }

        p.on('open', () => {
            const conn = p.connect(cleanId)
            conn.on('open', () => {
                settle(() => {
                    params.conns.current.set(cleanId, conn)
                    params.setJamId(cleanId)
                    params.setIsHost(false)
                    params.setConnected(true)
                    params.setError(null)
                    params.setMembers([{ id: cleanId, name: 'Host', isHost: true }, { id: 'me', name: me.name, image: me.image }])
                    conn.send({ type: 'JOIN', name: me.name, image: me.image })
                    res(p)
                })
            })

            conn.on('data', (d: any) => params.onData(d, conn))

            conn.on('close', () => {
                if (params.reconnectAttempt.current >= 3) {
                    params.leaveJam()
                    params.setError('Host ended the session')
                    return
                }
                params.reconnectAttempt.current++
                params.setError(`Reconnecting (${params.reconnectAttempt.current}/3)...`)
                params.reconnectTimer.current = setTimeout(() => {
                    if (!(p as any)) return
                    const newConn = (p as any).connect(cleanId)
                    newConn.on('open', () => {
                        params.conns.current.clear()
                        params.conns.current.set(cleanId, newConn)
                        params.setConnected(true)
                        params.setError(null)
                        params.reconnectAttempt.current = 0
                        newConn.send({ type: 'JOIN', name: me.name, image: me.image })
                    })
                    newConn.on('data', (d: any) => params.onData(d, newConn))
                    newConn.on('close', () => {
                        if (params.reconnectAttempt.current >= 3) {
                            params.leaveJam()
                            params.setError('Host ended the session')
                        } else {
                            params.reconnectAttempt.current++
                            params.setError(`Reconnecting (${params.reconnectAttempt.current}/3)...`)
                            params.reconnectTimer.current = setTimeout(() => {
                                if (!(p as any)) return
                                const retryConn = (p as any).connect(cleanId)
                                params.setupConn(retryConn)
                                params.conns.current.set(cleanId, retryConn)
                                params.setConnected(true)
                                params.setError(null)
                                params.reconnectAttempt.current = 0
                            }, params.reconnectAttempt.current * 2000)
                        }
                    })
                    newConn.on('error', (e: any) => {
                        if (params.reconnectAttempt.current >= 3) {
                            params.leaveJam()
                            params.setError(`Reconnection error: ${e?.type || e?.message || 'unknown'}`)
                        }
                    })
                }, params.reconnectAttempt.current * 1500)
            })

            conn.on('error', (e: any) => {
                settle(() => {
                    const msg = `Could not connect to Jam: ${e?.type || e?.message || 'connection error'}`
                    params.setError(msg)
                    rej(new Error(msg))
                })
            })
        })

        p.on('error', (e: any) => {
            settle(() => {
                const msg = e?.type === 'peer-unavailable'
                    ? 'Jam not found — check the ID and try again'
                    : `Peer error: ${e?.type || e?.message || 'unknown'}`
                params.setError(msg)
                rej(new Error(msg))
            })
        })
    })
}
