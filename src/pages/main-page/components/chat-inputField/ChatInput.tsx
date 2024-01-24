import { Toolbar, useTheme, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { useState } from 'react'
import { SocketApiServise } from '../../../../services/SocketApi.service'
import { useSelector } from 'react-redux'
import { getCurrentChannel, getUser } from '../../../../store/store'

export const ChatInput = () => {
  const [value, setValue] = useState('')
  const currentChannel = useSelector(getCurrentChannel)
  const currentUser = useSelector(getUser)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const theme = useTheme()
  const handleSubmit = () => {
    console.log('channel', currentChannel, 'user', currentUser, value)
    SocketApiServise.socket.emit('send_message', {
      userId: currentUser.id,
      channelId: currentChannel.id,
      message: value,
    })
    setValue('')
  }
  return (
    <MyAppBar>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: theme.palette.background.paper,
        }}
      >
        <ChatTextField {...{ value, handleChange }} />
        <IconButton>
          <SendIcon onClick={handleSubmit} />
        </IconButton>
      </Toolbar>
    </MyAppBar>
  )
}
