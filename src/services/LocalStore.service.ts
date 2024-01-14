import IUser from '../interfaces/User'

class LocalStore {
  setUserLogin(value: IUser['nickName']) {
    return localStorage.setItem('login', value)
  }
  getUserLogin(): string {
    return localStorage.getItem('login')
  }
  clearUserLogin() {
    return localStorage.removeItem('login')
  }
}
export const LocalService = new LocalStore()
