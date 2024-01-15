import axios from 'axios'
import IUser from '../interfaces/User'
import { TChannel } from '../interfaces/channel'
import { TMessage } from '../interfaces/message'

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
  createUser(credentials: { nickName: string }) {
    return this.instance.post('/database/users.json', credentials)
  }
  getChannels() {
    return this.instance.get<{ channels: TChannel[] }>('/database/channels.json')
  }
  getMessages() {
    return this.instance.get<{ messages: TMessage[] }>('/database/messages.json')
  }
}

export const ApiService = new Api()
