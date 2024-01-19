import { ListItemButton } from '@mui/material'
import { StyledAvatar, StyledListItem, StyledListItemText } from './styles'
import { ColoredChannel } from '../../../../interfaces/channel'
import { useSelector } from 'react-redux'
import { getCurrentChannel } from '../../../../store/store'
import { memo } from 'react'

export const Channel = ({ channel }: { channel: ColoredChannel }) => {
  console.log('channel rerender', channel.channelName)

  return (
    <StyledListItem {...{ channel }}>
      <StyledAvatar channelColor={channel.color}>{channel.channelName[0].toUpperCase()}</StyledAvatar>
      <StyledListItemText channelName={channel.channelName} />
    </StyledListItem>
  )
}
