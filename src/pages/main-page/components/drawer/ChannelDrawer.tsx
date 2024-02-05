import { Divider, List } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels, getUser } from '../../../../store/store'
import { setUserChannels } from '../../../../store/channels-slice/thunk'
import { Channel } from './components/channel-item/Channel'
import StyledDrawer from './styles'
import { ColoredChannel } from '../../../../interfaces/channel'
import { SkeletonChannel } from './components/skeleton-channel/Skeleton'

const ChannelDrawer = ({
  currentChannel,
  handleJoinChannel,
}: {
  currentChannel: ColoredChannel
  handleJoinChannel: (channel: ColoredChannel) => void
}) => {
  const storeChannels = useSelector(getChannels)
  const user = useSelector(getUser)

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
}
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
