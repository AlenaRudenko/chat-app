import io from 'socket.io-client'

class SocketApi {
  public socket = io('https://j9rl2v-3000.csb.app/')
  createConnection() {
    this.socket.on('connect', () => {
      console.log('client connected', this.socket.id)
    })
    return this.socket.on('disconnect', () => {
      console.log('disconnected', this.socket.id)
    })
  }
  joinChannel({ userId, channelId }: { userId: string; channelId: string }) {
    this.socket.emit('join_channel', { userId, channelId })
  }
}

export const SocketApiServise = new SocketApi()
