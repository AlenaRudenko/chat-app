import { ReactNode } from 'react'
import { ColoredChannel } from '../../../../interfaces/channel'

export type TProps = {
  currentChannel: ColoredChannel
  handleJoinChannel: (channel: ColoredChannel) => void
}
export type TStyledDrawerProps = {
  children: ReactNode
}

export type TStyledAvatar = {
  children: string
  channelColor: string
}

export type TStyledListItemText = string
