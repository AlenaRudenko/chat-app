import { Socket, io } from 'socket.io-client'
import { SERVER_URI } from '../constants/serverUri'
import { ColoredChannel } from '../interfaces/channel'
import { TMessage } from '../interfaces/message'

class SocketServizz {
  public socket: null | Socket = null

  createConnection() {
    this.socket = io(SERVER_URI)
    this.socket.on('connect', () => {
      return console.log('user connect to server')
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
    this.socket.disconnect()
    this.socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  }
}

export const SocketService = new SocketServizz()
