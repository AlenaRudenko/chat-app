import { ReactNode } from 'react'
import { ColoredChannel } from '../../../../../../interfaces/channel'

export type TListItemProps = {
  children: ReactNode
  channel: ColoredChannel
  currentChannel: ColoredChannel
  handleJoinChannel: (channel: ColoredChannel) => void
}
export type TChannelProps = {
  channel: ColoredChannel
  currentChannel: ColoredChannel
  handleJoinChannel: (channel: ColoredChannel) => void
}
