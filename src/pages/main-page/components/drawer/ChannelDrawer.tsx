import { Divider, List } from '@mui/material'
import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels, getUser } from '../../../../store/store'
import { setUserChannels } from '../../../../store/channels-slice/thunk'
import { Channel } from './components/channel-item/Channel'
import StyledDrawer from './styles'
import { SkeletonChannel } from './components/skeleton-channel/Skeleton'
import { TProps } from './types'

const ChannelDrawer = memo(({ currentChannel, handleJoinChannel }: TProps) => {
  const storeChannels = useSelector(getChannels)
  console.log('sssssssaaaaa', storeChannels)
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
