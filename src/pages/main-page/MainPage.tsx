import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { Suspense } from 'react'
import { ChatHeader } from './components/chat-header/ChatHeader'
import { ChatInput } from './components/chat-input/ChatInput'
import ChannelDrawer from './components/drawer/ChannelDrawer'
import { ChatLayout } from './components/chat-layout/ChatLayout'
import { Await, Navigate, useLoaderData } from 'react-router-dom'
import { LoadingPage } from '../../components/loading-page/LoadingPage'
import { DrawerProvider } from './store/drawerContext'
import { StyledBox } from './styles'
import { useChat } from './hooks/useChat'
import { Props } from './types'

export const MainPage = () => {
  const { loading, user, currentChannel, messages, handleJoinChannel, handleSendMessage, handleLogOut } = useChat()

  return (
    <DrawerProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
        <CssBaseline />
        <ChatHeader {...{ handleLogOut, currentChannel }} />
        <ChannelDrawer {...{ currentChannel, handleJoinChannel }} />
        <StyledBox>
          <ChatLayout {...{ user, messages, currentChannel, loading }} />
        </StyledBox>
        <ChatInput {...{ currentChannel, handleSendMessage }} />
      </Box>
    </DrawerProvider>
  )
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
