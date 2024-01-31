import { Toolbar, useTheme, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { useState } from 'react'
import { ColoredChannel } from '../../../../interfaces/channel'

type IProps = {
  handleSendMessage: (value: string) => void
  currentChannel: ColoredChannel
}
export const ChatInput = ({ currentChannel, handleSendMessage }: IProps) => {
  const isDisabled = !currentChannel
  const [value, setValue] = useState('')

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

        <IconButton onClick={handleSend} disabled={value.length < 3 && isDisabled}>
          <SendIcon />
        </IconButton>
      </Toolbar>
    </MyAppBar>
  )
}
