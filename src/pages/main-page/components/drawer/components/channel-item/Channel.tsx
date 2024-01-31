import { StyledAvatar, StyledListItem, StyledListItemText } from './styles'
import { ColoredChannel } from '../../../../../../interfaces/channel'


export const Channel = ({
  channel,
  currentChannel,
  handleJoinChannel,
}: {
  channel: ColoredChannel
  currentChannel: ColoredChannel
  handleJoinChannel: (channel: ColoredChannel) => void
}) => {
  console.log('ij ckexbkjcm',channel)
  return (
    <StyledListItem {...{ channel, currentChannel, handleJoinChannel }}>
      <StyledAvatar channelColor={channel.color}>{channel.channelName[0]}</StyledAvatar>
      <StyledListItemText channelName={channel.channelName} />
    </StyledListItem>
  )
}
