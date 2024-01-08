import IUser from '../../interfaces/User'

export type TState = {
  user: IUser | null
  regStatus: string | null
  authStatus: string | null
  regError: string | null
  authError: string | null
}
