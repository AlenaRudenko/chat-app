import axios from 'axios'

class Api {
  private instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-type': 'application/json',
    },
  })

  getUsers() {
    return this.instance.get('/database/users.json')
  }
  getChannels() {
    return this.instance.get('/database/channels.json')
  }
}

export const ApiService = new Api()
