import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import { Suspense, useState } from 'react'
import { Paper } from '@mui/material'
import { ChatHeader } from '../../components/header/chat-header/ChatHeader'
import { ChatInput } from './components/chat-inputField/ChatInput'
import { IState } from './types'
import ChannelDrawer from './components/drawer/ChannelDrawer'
import { ChatLayout } from './chat-layout/ChatLayout'
import { Await, Navigate, useLoaderData } from 'react-router-dom'
import { LoadingPage } from '../../components/loading-page/LoadingPage'

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          background: theme.palette.background.default,
        }}
      >
        <ChatLayout />
      </Box>
      <ChatInput {...{ isDrawerOpen }} />
    </Box>
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
