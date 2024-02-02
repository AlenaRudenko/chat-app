import { Toolbar, useTheme, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { useState } from 'react'
import { IProps } from './types'

export const ChatInput = ({ currentChannel, handleSendMessage }: IProps) => {
  const [value, setValue] = useState('')
  const isDisabled = !currentChannel

  const theme = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSend = () => {
    handleSendMessage(value)
    setValue((prevState) => '')
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
        <ChatTextField {...{ isDisabled, value, handleChange }} />
        <IconButton disabled={isDisabled || value.length < 1} onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Toolbar>
    </MyAppBar>
  )
}
