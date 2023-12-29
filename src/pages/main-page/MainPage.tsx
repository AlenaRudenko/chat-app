import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { Paper } from '@mui/material'
import { ChatLayout } from './chat-layout/ChatLayout'
import { ChatHeader } from '../../components/header/chat-header/ChatHeader'
import { ChannelDrawer } from './components/drawer/ChannelDrawer'
import { ChatInput } from './components/chat-inputField/ChatInput'

export const MainPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const theme = useTheme()

  const isMenuOpen = Boolean(anchorEl)

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <CssBaseline />
      <ChatHeader {...{ isDrawerOpen, handleDrawerOpen, isMenuOpen, handleMenuClick, handleMenuClose, anchorEl }} />
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
