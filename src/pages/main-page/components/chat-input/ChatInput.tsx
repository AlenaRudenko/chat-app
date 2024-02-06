import { Toolbar, useTheme, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { memo, useState } from 'react'
import { IProps } from './types'
import { getCurrentChannel, getUser } from '../../../../store/store'
import { useSelector } from 'react-redux'

export const ChatInput = memo(({ handleSendMessage }: IProps) => {
  const [value, setValue] = useState('')

  const currentChannel = useSelector(getCurrentChannel)
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
        <IconButton
          disabled={isDisabled || value.length < 1}
          onClick={(event) => {
            event.stopPropagation()
            event.preventDefault()
            handleSend()
          }}
        >
          <SendIcon />
        </IconButton>
      </Toolbar>
    </MyAppBar>
  )
})
