import { Toolbar, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { memo } from 'react'
import { IProps } from './types'

import { useChatInput } from './hooks/useChatInput'

export const ChatInput = memo(({ handleSendMessage }: IProps) => {
  const { value, isDisabled, theme, handleChange, handleSend } = useChatInput({ handleSendMessage })

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
