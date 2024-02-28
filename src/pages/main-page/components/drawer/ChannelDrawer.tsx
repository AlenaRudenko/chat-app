import { Divider, List } from '@mui/material'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getChannels } from '../../../../store/store'
import { Channel } from './components/channel-item/Channel'
import StyledDrawer from './styles'
import { SkeletonChannel } from './components/skeleton-channel/Skeleton'
import { TProps } from './types'

const ChannelDrawer = memo(({ currentChannel, handleJoinChannel }: TProps) => {
  const storeChannels = useSelector(getChannels)

  return (
    <StyledDrawer>
      <Divider sx={{ border: 'none' }} />
      <List>
        {!storeChannels ? (
          <SkeletonChannel />
        ) : (
          storeChannels.map((channel) => (
            <Channel key={channel.id} {...{ channel, currentChannel, handleJoinChannel }} />
          ))
        )}
      </List>
    </StyledDrawer>
  )
})
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
