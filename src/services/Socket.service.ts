import { Socket, io } from 'socket.io-client'
import { SERVER_URI } from '../constants/serverUri'
import { ColoredChannel } from '../interfaces/channel'
import { TMessage } from '../interfaces/message'

class SocketServizz {
  public socket: Socket = io(SERVER_URI, { autoConnect: false, transports: ['websocket'], upgrade: false })

  createConnection() {
    this.socket.connect()
    this.socket.on('connect', () => {
      console.log('user connect to server')
    })
    this.socket.on('connect_error', () => {
      console.log('connect error')
    })
    this.socket.on('reconnect', () => {
      console.log('reconnect')
    })
    this.socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  }

  receiveMessages(callback: (mes: null | TMessage[] | TMessage) => void) {
    this.socket.on('receive_message', (response) => {
      if (response) {
        callback(response)
      }
    })
  }

  handleJoinChannel({ channelId, userId }: { channelId: ColoredChannel['id']; userId: string }) {
    this.socket.emit('join_channel', { userId, channelId })
  }

  handleLeaveChannel(channelId: string) {
    this.socket.emit('user left', { channelId })
  }

  handleSendMessage({ message, channelId, userId }: { message: string; channelId: string; userId: string }) {
    this.socket.emit('send_message', {
      userId,
      channelId,
      message,
    })
  }

  handleLogOut() {
    console.log('trying disconnect')
    // this.socket.disconnect()
  }
}

export const SocketService = new SocketServizz()
