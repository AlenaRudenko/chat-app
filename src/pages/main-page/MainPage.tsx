import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import { Suspense } from 'react'
import { ChatHeader } from './components/chat-header/ChatHeader'
import { ChatInput } from './components/chat-inputField/ChatInput'
import ChannelDrawer from './components/drawer/ChannelDrawer'
import { ChatLayout } from './components/chat-layout/ChatLayout'
import { Await, Navigate, useLoaderData } from 'react-router-dom'
import { LoadingPage } from '../../components/loading-page/LoadingPage'
import { DrawerProvider } from './store/drawerContext'
import { StyledBox } from './styles'
import { useChat } from './hooks/useChat'
import { useModal } from './components/chat-header/hooks/useModal'
import { ModalComponent } from '../../components/modal/Modal'

export const MainPage = () => {
  const theme = useTheme()
  const { isOpen, handleCloseModal, handleOpenModal } = useModal()
  const { user, currentChannel, messages, handleJoinChannel, handleSendMessage, handleLogOut } = useChat()
  return (
    <DrawerProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
        <CssBaseline />
        <ModalComponent {...{ isOpen, handleCloseModal }} />
        <ChatHeader {...{ handleOpenModal, handleLogOut }} />
        <ChannelDrawer {...{ currentChannel, handleJoinChannel }} />
        <StyledBox>
          <ChatLayout {...{ user, messages }} />
        </StyledBox>
        <ChatInput {...{ currentChannel, handleSendMessage }} />
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
