import { Divider, List } from '@mui/material'
import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels, getCurrentChannel } from '../../../../store/store'
import { setUserChannels } from '../../../../store/channels-slice/thunk'
import { useChannel } from '../../hooks/useChannel.hook'
import { Channel } from '../channel-item/Channel'
import StyledDrawer from './styles'

const ChannelDrawer = memo(() => {
  const storeChannels = useSelector(getChannels)

  const dispatch = useDispatch<AppDispatch>()
  console.log('drawer rerender')

  useEffect(() => {
    dispatch(setUserChannels('ds'))
  }, [])

  return (
    <StyledDrawer>
      <Divider sx={{ border: 'none' }} />
      <List>
        {storeChannels &&
          storeChannels.length > 0 &&
          storeChannels.map((channel) => <Channel key={channel.id} {...{ channel }} />)}
      </List>
    </StyledDrawer>
  )
})
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
