import axios from 'axios'
import IUser from '../interfaces/User'
import { TChannel } from '../interfaces/channel'

type TUser = Pick<IUser, 'id' & 'userName'>

class Api {
  private instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3003/',
    // baseURL: 'https://227c85-3030.csb.app/',
    headers: {
      'Content-type': 'application/json',
    },
  })

  getUsers() {
    return this.instance.get<IUser[]>('/users')
  }

  getUserById(credentials: IUser['id']) {
    return this.instance.get<TUser[]>(`users/${credentials}`)
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
