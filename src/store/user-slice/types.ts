import IUser from '../../interfaces/User'

export type TState = {
  user: IUser | null
  regError: string | null
  authError: string | null
}

export type TProps = {
  login: string
  navigateFn?: () => void
}
