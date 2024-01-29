import { ReactNode } from 'react'
import { ColoredChannel } from '../../../../interfaces/channel'

export type TListItemProps = {
  children: ReactNode
  channel: ColoredChannel
  currentChannel: ColoredChannel
  handleJoinChannel: (channelId: string) => void
}
