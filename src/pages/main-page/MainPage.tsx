import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import {  Paper, TextField } from '@mui/material'
import { ChatLayout } from './chat-layout/ChatLayout'
import { ChatHeader } from '../../components/header/chat-header/ChatHeader'
import { ChannelDrawer } from './components/drawer/ChannelDrawer'
import { ChatInput } from './components/chat-inputField/ChatInput'







export const MainPage = () => {
  const theme = useTheme()

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true)
  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const isMenuOpen = Boolean(anchorEl)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <CssBaseline />
      <ChatHeader {...{isDrawerOpen,handleDrawerOpen,isMenuOpen,handleMenuClick,handleMenuClose,anchorEl }}/>
      <ChannelDrawer {...{isDrawerOpen}}/>
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
        <ChatInput {...{isDrawerOpen}}/>
    </Box>
  )
}
