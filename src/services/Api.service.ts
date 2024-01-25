import axios from 'axios'
import IUser from '../interfaces/User'
import { TChannel } from '../interfaces/channel'
import { TMessage, TPostMessage } from '../interfaces/message'

class Api {
  private instance = axios.create({
    baseURL: 'https://6fq8v2-3000.csb.app/',
    headers: {
      'Content-type': 'application/json',
    },
  })

  getUsers() {
    return this.instance.get<IUser[]>('/users')
  }
  getUserByNickName(nickName: string) {
    return this.instance.get<IUser[]>(`/users?nickName=${nickName}`)
  }
  getUserChannels(id: string) {
    return this.instance.get<TChannel[]>(`/users/${id}/channels`)
  }
  createUser(credentials: IUser['nickName']) {
    return this.instance.post('/users', { nickName: credentials })
  }
  joinChannel() {
    return this.instance.post('/database/channels.json')
  }
  leaveChannel(credentials: TChannel['id']) {
    return this.instance.post('/database/channels.json', { channelId: credentials })
  }

  getMessages() {
    return this.instance.get<{ messages: TMessage[] }>('/database/messages.json')
  }
  sendMessage(credentials: TPostMessage) {
    return this.instance.post('/database/messages.json', credentials)
  }
}

export const ApiService = new Api()
