import io from 'socket.io-client'

class SocketApi {
  public socket = io('https://j9rl2v-3000.csb.app/')
  createConnection() {
    return this.socket.on('connect', () => {
      console.log('connected')
    })
  }
  joinChannel({ userId, channelName }: { userId: string; channelName: string }) {
    console.log('join', { userId, channelName })
    return this.socket.emit('join_channel', { userId, channelName })
  }
  receiveMessages() {
    return this.socket.on('receive_message', (msg) => {
      console.log(msg)
    })
  }
}

export const SocketApiServise = new SocketApi()
