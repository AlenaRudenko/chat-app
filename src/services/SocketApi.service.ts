import io, { Socket } from 'socket.io-client'

class SocketApi {
  public socket: null | Socket = null
  createConnection() {
    this.socket = io('http://localhost:3000/')
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.socket.on('users', (data) => {
      console.log('users', data)
    })
    this.socket.on('disconnect', () => {
      console.log('disconnected')
    })
  }
  //   sendMessage() {
  //     this.socket = io('http://localhost:3000/')
  //     this.socket.emit('send_message', {
  //       userId: 'feb042250f75284d5c91f42190afc289',
  //       channelId: '5dbb3ca088c9823994e1b078ba4f5ac2',
  //       message: 'hello world',
  //     })
  //   }
  //   getUsers() {
  //     this.socket = io('http://localhost:3000/')
  //     this.socket.emit('users', (data: IUser[]) => {
  //       console.log('hi', data)
  //     })
  //   }
}

export const SocketApiServise = new SocketApi()
