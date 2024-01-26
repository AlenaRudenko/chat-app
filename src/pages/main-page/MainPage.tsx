import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import { Suspense } from 'react'
import { ChatHeader } from '../../components/header/chat-header/ChatHeader'
import { ChatInput } from './components/chat-inputField/ChatInput'
import ChannelDrawer from './components/drawer/ChannelDrawer'
import { ChatLayout } from './chat-layout/ChatLayout'
import { Await, Navigate, useLoaderData } from 'react-router-dom'
import { LoadingPage } from '../../components/loading-page/LoadingPage'
import { DrawerProvider } from './store/drawerContext'
import { StyledBox } from './styles'
import { useChat } from './hooks/useChat'

export const MainPage = () => {
  const theme = useTheme()
  const { user, currentChannel, messages, handleJoinChannel, handleSendMessage, handleLeaveChannel } = useChat()
  return (
    <DrawerProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
        <CssBaseline />
        <ChatHeader />
        <ChannelDrawer />
        <StyledBox>
          <ChatLayout />
        </StyledBox>
        <ChatInput />
      </Box>
    </DrawerProvider>
  )
}

type Props = {
  userPromise: Promise<string>
}
export const MainPageWrapper = () => {
  const user = useLoaderData()

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await
        children={<MainPage />}
        errorElement={<Navigate to='/auth' replace />}
        resolve={(user as Props).userPromise}
      />
    </Suspense>
  )
}
