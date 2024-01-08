import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { Paper } from '@mui/material'
import { ChatHeader } from '../../components/header/chat-header/ChatHeader'
import { ChatInput } from './components/chat-inputField/ChatInput'
import { IState } from './types'
import ChannelDrawer from './components/drawer/ChannelDrawer'
import { ChatLayout } from './chat-layout/ChatLayout'

export const MainPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<IState['isDrawerOpen']>(true)

  const theme = useTheme()

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <CssBaseline />
      <ChatHeader {...{ isDrawerOpen, handleDrawerOpen }} />
      <ChannelDrawer {...{ isDrawerOpen }} />
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: theme.palette.background.default,
        }}
      >
        <ChatLayout />
      </Paper>
      <ChatInput {...{ isDrawerOpen }} />
    </Box>
  )
}
