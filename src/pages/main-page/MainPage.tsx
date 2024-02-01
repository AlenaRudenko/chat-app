import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import { Suspense, useEffect } from 'react'
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
import { SocketService } from '../../services/Socket.service'
import { store } from '../../store/store'

export const MainPage = () => {
  const theme = useTheme()
  const { isOpen, handleCloseModal, handleOpenModal } = useModal()
  console.log('MAIN',store.getState().user.user)
  useEffect(() => {

    SocketService.createConnection()
  },[])

  return (
    <DrawerProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
        <CssBaseline />
        <ModalComponent {...{ isOpen, handleCloseModal }} />
        <ChatHeader {...{ handleOpenModal }} />
        <ChannelDrawer  />
        {/* <StyledBox>
          <ChatLayout {...{ user, messages }} />
        </StyledBox>
        <ChatInput {...{ currentChannel, handleSendMessage }} /> */}
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
