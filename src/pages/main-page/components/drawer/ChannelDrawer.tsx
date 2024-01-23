import { Divider, List } from '@mui/material'
import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels, getUser } from '../../../../store/store'
import { setUserChannels } from '../../../../store/channels-slice/thunk'

import { Channel } from '../channel-item/Channel'
import StyledDrawer from './styles'

const ChannelDrawer = () => {
  const storeChannels = useSelector(getChannels)
  const user = useSelector(getUser)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (user) {
      dispatch(setUserChannels(user.id))
    }
  }, [dispatch, user])

  return (
    <StyledDrawer>
      <Divider sx={{ border: 'none' }} />
      <List>{storeChannels && storeChannels.map((channel) => <Channel key={channel.id} {...{ channel }} />)}</List>
    </StyledDrawer>
  )
}
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
