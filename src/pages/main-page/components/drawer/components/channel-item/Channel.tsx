import { StyledAvatar, StyledListItem, StyledListItemText } from './styles'
import { ColoredChannel } from '../../../../../../interfaces/channel'


export const Channel = ({
  channel
}: {
  channel: ColoredChannel
}) => {

  return (
    <StyledListItem {...{ channel }}>
      <StyledAvatar channelColor={channel.color}>{channel.channelName[0]}</StyledAvatar>
      <StyledListItemText channelName={channel.channelName} />
    </StyledListItem>
  )
}
