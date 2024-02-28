import { ReactElement } from 'react'
import IUser from '../../../../interfaces/User'
import { TMessage } from '../../../../interfaces/message'

export type TProps = {
  user: IUser
  messages: TMessage[]
}
