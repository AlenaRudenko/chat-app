import axios from 'axios'

class Api {
  private instance = axios.create({
    baseURL: 'https://chatapp-bslw--3000--a2aabdd9.local-credentialless.webcontainer.io/',
    headers: {
      'Content-type': 'application/json',
    },
  })

  getUsers() {
    return this.instance.get('/database/users.json')
  }
}

export const ApiService = new Api()
