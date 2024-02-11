import { ColoredChannel } from '../../interfaces/channel'

export type TState = {
  channels: ColoredChannel[] | null
  currentChannel: ColoredChannel | null
  channelError: null | string
}
