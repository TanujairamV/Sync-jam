const SIGNAL_URL =
    'wss://jam-rtc.tanujairam.workers.dev'

export class SignalingClient {
    private ws: WebSocket | null = null
    public clientId: string | null = null

    async connect(
        roomId: string,
        onMessage: (data: any) => void
    ) {
        return new Promise<void>((resolve, reject) => {
            this.ws = new WebSocket(
                `${SIGNAL_URL}/room/${roomId}`
            )

            this.ws.onopen = () => {
                console.log(
                    '[SIGNAL] Connected',
                    roomId
                )
                resolve()
            }

            this.ws.onmessage = e => {
                try {
                    const msg = JSON.parse(e.data)

                    if (
                        msg.type === 'CONNECTED' &&
                        msg.clientId
                    ) {
                        this.clientId =
                            msg.clientId

                        console.log(
                            '[SIGNAL] Client ID:',
                            this.clientId
                        )

                        return
                    }

                    onMessage(msg)
                } catch {}
            }

            this.ws.onerror = reject
        })
    }

    async waitForClientId(): Promise<string> {
        while (!this.clientId) {
            await new Promise(resolve =>
                setTimeout(resolve, 50)
            )
        }

        return this.clientId
    }

    send(data: any) {
        this.ws?.send(
            JSON.stringify(data)
        )
    }

    close() {
        this.ws?.close()
    }
}