import { Divider, List } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels, getUser } from '../../../../store/store'
import { setUserChannels } from '../../../../store/channels-slice/thunk'
import { Channel } from './components/channel-item/Channel'
import StyledDrawer from './styles'
import { ColoredChannel } from '../../../../interfaces/channel'
import { SkeletonChannel } from './components/Skeleton'

const ChannelDrawer = () => {
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
        {!storeChannels &&
          Array(20)
            .fill('')
            .map((value, index) => <SkeletonChannel key={index} />)}
        {storeChannels &&
          storeChannels.map((channel) => (
            <Channel key={channel.id} {...{ channel }} />
          ))}
      </List>
    </StyledDrawer>
  )
}
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
