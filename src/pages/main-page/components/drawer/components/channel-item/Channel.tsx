import { StyledAvatar, StyledListItem, StyledListItemText } from './styles'
import { TChannelProps } from './types'

export const Channel = ({ channel, currentChannel, handleJoinChannel }: TChannelProps) => {
  return (
    <StyledListItem {...{ channel, currentChannel, handleJoinChannel }}>
      <StyledAvatar channelColor={channel.color}>{channel.channelName[0]}</StyledAvatar>
      <StyledListItemText channelName={channel.channelName} />
    </StyledListItem>
  )
}
