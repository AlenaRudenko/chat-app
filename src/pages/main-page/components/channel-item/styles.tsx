import { Avatar, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useDrawer } from '../../store/drawerContext'
import { TListItemProps } from './types'
import { AppDispatch, getCurrentChannel } from '../../../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { useChat } from '../../hooks/useChat'
import { setCurrentChannel } from '../../../../store/channels-slice/channelsSlice'

export const StyledListItem = ({ children, channel }: TListItemProps) => {
  const { currentChannel, handleJoinChannel } = useChat()
  const dispatch = useDispatch<AppDispatch>()
  return (
    <ListItem
      key={channel.id}
      sx={{ display: 'block', ml: '2px' }}
      disablePadding
      onClick={() => {
        handleJoinChannel(channel.id)
        dispatch(setCurrentChannel(channel))
      }}
    >
      {' '}
      <ListItemButton
        selected={currentChannel && currentChannel.id === channel.id ? true : false}
        sx={{
          minHeight: 48,
          justifyContent: 'initial',
        }}
      >
        {children}
      </ListItemButton>
    </ListItem>
  )
}

export const StyledAvatar = ({ children, channelColor }: { children: string; channelColor: string }) => {
  const { isDrawerOpen } = useDrawer()
  return (
    <Avatar
      sx={{
        width: 32,
        height: 32,
        mr: isDrawerOpen ? 3 : 'auto',
        justifyContent: 'center',
        backgroundColor: channelColor,
      }}
    >
      {children}
    </Avatar>
  )
}
StyledAvatar.displayName = 'StyledAvatar'

export const StyledListItemText = ({ channelName }: { channelName: string }) => {
  const { isDrawerOpen } = useDrawer()
  return <ListItemText primary={channelName} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
}
StyledListItemText.displayName = 'StyledListItemText'
