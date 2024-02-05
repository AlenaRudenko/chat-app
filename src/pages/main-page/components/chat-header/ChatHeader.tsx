import { memo } from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { IProps } from './types'
import { ThemeIcon } from '../../../../components/theme-icon/ThemeIcon'
import DrawerButtonBox from './styles'
import { useTheme } from '@mui/material/styles'
import { ChatMenu } from './menu-chat-header/ChatMenu'
import { useCreateChannel } from './menu-chat-header/create-channel-modal/hooks/useCreateChannel.hook'
import { ModalComponent } from '../../../../components/modal/Modal'

export const ChatHeader = memo(({ handleLogOut, currentChannel }: IProps) => {
  const theme = useTheme()

  const { value, handleSetValue, handleSubmit, isOpen, handleViewModal } = useCreateChannel()

  return (
    <AppBar elevation={0} position='fixed' sx={{ height: '64px', backgroundColor: theme.palette.primary.dark }}>
      <ModalComponent {...{ value, handleSetValue, handleSubmit, isOpen, handleViewModal }} />
      <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Container
          maxWidth={false}
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
          disableGutters
        >
          <DrawerButtonBox />
          {currentChannel && (
            <Typography component='span' variant='h2'>
              {currentChannel.channelName}
            </Typography>
          )}
        </Container>
        <Box sx={{ display: 'flex' }}>
          <ChatMenu {...{ handleViewModal, handleLogOut }} />
          <ThemeIcon />
        </Box>
      </Toolbar>
    </AppBar>
  )
})
