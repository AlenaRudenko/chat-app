import { memo } from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { IProps } from './types'
import { ThemeIcon } from '../../../../components/theme-icon/ThemeIcon'
import DrawerButtonBox from './styles'
import { useTheme } from '@mui/material/styles'
import { ChatMenu } from './menu-chat-header/ChatMenu'

export const ChatHeader = memo(({ handleOpenModal, handleLogOut, currentChannel }: IProps) => {
  const theme = useTheme()

  return (
    <AppBar elevation={0} position='fixed' sx={{ height: '64px', backgroundColor: theme.palette.primary.dark }}>
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
          <ChatMenu {...{ handleOpenModal, handleLogOut }} />
          <ThemeIcon />
        </Box>
      </Toolbar>
    </AppBar>
  )
})
