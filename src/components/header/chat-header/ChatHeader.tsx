import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { ThemeIcon } from '../../theme-icon/ThemeIcon'
import { useTheme } from '@mui/material/styles'
import DrawerButtonBox from './styles'
import { ChatMenu } from './menu-chat-header/ChatMenu'
import { useSelector } from 'react-redux'
import { getCurrentChannel } from '../../../store/store'
interface IProps {
  handleOpenModal: () => void
  handleLeaveChannel: () => void
}
export const ChatHeader = ({ handleOpenModal, handleLeaveChannel }: IProps) => {
  const channel = useSelector(getCurrentChannel)

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
          <Typography component={'span'} variant='h2'>
            {channel ? channel.channelName : ''}
          </Typography>
        </Container>
        <Box sx={{ display: 'flex' }}>
          <ChatMenu {...{ handleOpenModal, handleLeaveChannel }} />
          <ThemeIcon />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
