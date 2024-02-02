import { Socket, io } from 'socket.io-client'
import { SERVER_URI } from '../constants/serverUri'
import { store } from '../store/store'
import { ColoredChannel } from '../interfaces/channel'
import { setCurrentChannel } from '../store/channels-slice/channelsSlice'
import IUser from '../interfaces/User'
import { TMessage } from 'src/interfaces/message'

class SocketServizz {
  public socket: null | Socket = null
  public messages = [] as TMessage[]
  createConnection() {
    this.socket = io(SERVER_URI)
    this.socket.on('connect', () => {
      return console.log('user connect to server')
    })
  }
  receiveMessages(callback: (mes: [] | TMessage[]) => void): [] | TMessage[] {
    this.socket.on('receive_message', (response) => {
      if (response) {
        this.messages = response
        callback(this.messages)
      }
    })
    return
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
    console.log('trying disconnecting')
    this.socket.disconnect()
    this.socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  }
}

export const SocketService = new SocketServizz()
