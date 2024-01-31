import { Avatar, Divider, List, Skeleton } from '@mui/material'
import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels, getUser } from '../../../../store/store'
import { setUserChannels } from '../../../../store/channels-slice/thunk'

import { Channel } from '../channel-item/Channel'
import StyledDrawer from './styles'
import { ColoredChannel } from '../../../../interfaces/channel'
import { SkeletonChannel } from './components/Skeleton'

const ChannelDrawer = ({
  currentChannel,
  handleJoinChannel,
}: {
  currentChannel: ColoredChannel
  handleJoinChannel: (channel: ColoredChannel) => void
}) => {
  const storeChannels = useSelector(getChannels)
  const user = useSelector(getUser)
  console.log('drawerchannels', storeChannels)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (user) {
      dispatch(setUserChannels())
    }
  }, [dispatch, user])

  return (
    <StyledDrawer>
      <Divider sx={{ border: 'none' }} />
      <List>
        {!storeChannels &&
          Array(20)
            .fill('')
            .map((i) => <SkeletonChannel />)}
        {storeChannels &&
          storeChannels.map((channel) => (
            <Channel key={channel.id} {...{ channel, currentChannel, handleJoinChannel }} />
          ))}
      </List>
    </StyledDrawer>
  )
}
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
