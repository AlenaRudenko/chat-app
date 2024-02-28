import { ColoredChannel } from '../../../../../../interfaces/channel'
import { TMessage } from '../../../../../../interfaces/message'

export type TProps = {
  loading: boolean
  currentChannel: ColoredChannel
  messages: TMessage[] | null | []
}
