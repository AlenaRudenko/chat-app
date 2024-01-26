import { Toolbar, useTheme, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { useState } from 'react'
import { useChat } from '../../hooks/useChat'

export const ChatInput = () => {
  const [value, setValue] = useState('')
  const { handleSendMessage } = useChat()
  const theme = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
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
          <SendIcon onClick={() => handleSendMessage(value)} />
        </IconButton>
      </Toolbar>
    </MyAppBar>
  )
}
