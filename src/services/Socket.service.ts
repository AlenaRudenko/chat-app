import { Socket, io } from 'socket.io-client'
import { SERVER_URI } from '../constants/serverUri'
import { ColoredChannel } from '../interfaces/channel'
import { TMessage } from '../interfaces/message'
import IUser from '../interfaces/User'

class SocketServizz {
  public socket: Socket = io(SERVER_URI, { autoConnect: false, transports: ['websocket'], upgrade: false })

  createConnection() {
    this.socket.connect()
    this.socket.on('connect', () => {
      console.log('user connected to server')
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

  receiveMessages(callback: (message: null | TMessage[] | TMessage) => void) {
    this.socket.on('receive_message', (response) => {
      if (response) {
        callback(response)
      }
    })
  }

  handleJoinChannel({ channelId, userId }: { channelId: ColoredChannel['id']; userId: IUser['id'] }) {
    this.socket.emit('join_channel', { userId, channelId })
  }

  handleLeaveChannel(channelId: ColoredChannel['id']) {
    this.socket.emit('leave_channel', { channelId })
  }

  handleSendMessage({
    message,
    channelId,
    userId,
  }: {
    message: string
    channelId: ColoredChannel['id']
    userId: IUser['id']
  }) {
    this.socket.emit('send_message', {
      userId,
      channelId,
      message,
    })
  }

  handleLogOut() {
    this.socket.disconnect()
  }
}

export const SocketService = new SocketServizz()
