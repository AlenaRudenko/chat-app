import { Avatar, Divider, List, ListItem, ListItemButton } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import { memo, useEffect, useState } from 'react'
import { Drawer } from './styles'
import { TProps } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels, getCurrentChannel } from '../../../../store/store'
import { setUserChannels } from '../../../../store/channels-slice/thunk'
import { useChannel } from '../../hooks/useChannel.hook'

const ChannelDrawer = memo(({ isDrawerOpen }: TProps) => {
  const { handleSetChannel } = useChannel()
  const dispatch = useDispatch<AppDispatch>()
  const currentChannel = useSelector(getCurrentChannel)
  const storeChannels = useSelector(getChannels)
  useEffect(() => {
    dispatch(setUserChannels('ds'))
  }, [])
  return (
    <Drawer anchor='left' open={isDrawerOpen} variant='permanent'>
      <Divider sx={{ border: 'none' }} />
      <List>
        {storeChannels &&
          storeChannels.map((channel, index) => (
            <ListItem
              key={channel.id}
              sx={{ display: 'block', ml: '2px' }}
              disablePadding
              onClick={() => handleSetChannel(channel)}
            >
              <ListItemButton
                selected={currentChannel && currentChannel.id === channel.id ? true : false}
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    mr: isDrawerOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    backgroundColor: channel.color,
                  }}
                >
                  {channel.channelName[0].toUpperCase()}
                </Avatar>
                <ListItemText primary={channel.channelName} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Drawer>
  )
})
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
