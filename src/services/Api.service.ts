import axios from 'axios'
import IUser from '../interfaces/User'
import { TChannel } from '../interfaces/channel'

class Api {
  private instance = axios.create({
    withCredentials: true,
    baseURL: 'https://227c85-3000.csb.app/',
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

  getChannels() {
    return this.instance.get<TChannel[]>(`/channels`)
  }

  createUser(credentials: IUser['nickName']) {
    return this.instance.post('/users', { nickName: credentials })
  }

  createChannel(credentials: { userId: string; channelName: string }) {
    return this.instance.post('/channels', credentials)
  }
}

export const ApiService = new Api()
