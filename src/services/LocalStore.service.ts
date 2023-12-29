import IUser from '../interfaces/User'

class LocalStore {
  setUserId(value: IUser['id']) {
    return localStorage.setItem('id', value)
  }
  getUserId(): string {
    return localStorage.getItem('id')
  }
}
export const LocalService = new LocalStore()
