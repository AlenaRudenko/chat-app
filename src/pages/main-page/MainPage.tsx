import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect, useState } from 'react'
import {  Paper, TextField, Typography } from '@mui/material'
import { ChatLayout } from './chat-layout/ChatLayout'
import { ChatHeader } from '../../components/header/chat-header/ChatHeader'
import { ChannelDrawer } from './components/drawer/ChannelDrawer'
import { ChatInput } from './components/chat-inputField/ChatInput'
import { ApiService } from '../../services/Api.service'
import { fetchUsers } from '../../store/user-slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store/store'

export const MainPage = () => {
  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  const theme = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state:RootState) => state.user.users)
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
console.log(users)
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
