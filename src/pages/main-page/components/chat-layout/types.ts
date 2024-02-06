import { ReactElement } from 'react'
import IUser from '../../../../interfaces/User'
import { ColoredChannel } from '../../../../interfaces/channel'
import { TMessage } from '../../../../interfaces/message'

export interface IProps extends React.PropsWithChildren {
  children: ReactElement
}
export type TProps = {
  user: IUser
  messages: TMessage[]
}
