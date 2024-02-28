import IUser from '../../interfaces/User'

export type TState = {
  user: IUser | null
  error: string | null
}

export type AsynkFuncProps = {
  login: string
  navigateFn?: () => void
}
