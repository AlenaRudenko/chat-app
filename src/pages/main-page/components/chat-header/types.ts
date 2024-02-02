import { ColoredChannel } from '../../../../interfaces/channel'

export interface IProps {
  handleOpenModal: () => void
  handleLogOut: () => void
  currentChannel: ColoredChannel
}
