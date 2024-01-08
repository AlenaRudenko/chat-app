import { Toolbar, useTheme, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { TProps } from './types'

export const ChatInput = ({ isDrawerOpen }: TProps) => {
  const theme = useTheme()
  return (
    <MyAppBar {...{ isDrawerOpen }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: theme.palette.background.paper,
        }}
      >
        <ChatTextField />
        <IconButton>
          <SendIcon />
        </IconButton>
      </Toolbar>
    </MyAppBar>
  )
}
