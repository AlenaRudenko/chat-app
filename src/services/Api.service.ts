import axios from 'axios'
import IUser from '../interfaces/User'

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
    return this.instance.get('/database/channels.json')
  }
}

export const ApiService = new Api()
