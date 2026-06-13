export interface SyncState {
    position: number
    timestamp: number
    playing: boolean
}

export function predictPosition(
    position: number,
    timestamp: number,
    playing: boolean
): number {
    if (!playing) {
        return Math.max(0, position)
    }

    return Math.max(
        0,
        position + (Date.now() - timestamp)
    )
}

export function getSyncTarget(
    state: SyncState
): number {
    return predictPosition(
        state.position,
        state.timestamp,
        state.playing
    )
}

export function calculateDrift(
    localPosition: number,
    remotePosition: number
): number {
    return remotePosition - localPosition
}

export function shouldHardSeek(
    drift: number
): boolean {
    return Math.abs(drift) > 750
}

export function shouldIgnore(
    drift: number
): boolean {
    return Math.abs(drift) < 100
}

export function shouldSoftSync(
    drift: number
): boolean {
    const abs = Math.abs(drift)

    return abs >= 100 && abs <= 750
}

export function getDriftState(
    drift: number
): "ignore" | "soft" | "hard" {
    const abs = Math.abs(drift)

    if (abs < 100)
        return "ignore"

    if (abs <= 750)
        return "soft"

    return "hard"
}