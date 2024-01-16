import axios from 'axios'
import IUser from '../interfaces/User'
import { TChannel } from '../interfaces/channel'
import { TMessage, TPostMessage } from '../interfaces/message'

class Api {
  private instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-type': 'application/json',
    },
  })

  getUsers() {
    return this.instance.get<{ users: IUser[] }>('/database/users.json')
  }
  createUser(credentials: IUser['nickName']) {
    return this.instance.post('/database/users.json', { nickName: credentials })
  }

  getChannels() {
    return this.instance.get<{ channels: TChannel[] }>('/database/channels.json')
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
