import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeIcon } from '../../theme-icon/ThemeIcon'
import { useTheme } from '@mui/material/styles'
import DrawerButtonBox from './styles'
import { IProps } from './types'
import { ChatMenu } from './menu-chat-header/ChatMenu'

export const ChatHeader = ({ handleDrawerOpen, isDrawerOpen }: IProps) => {
  const theme = useTheme()

  return (
    <AppBar elevation={0} position='fixed' sx={{ height: '64px', backgroundColor: theme.palette.primary.dark }}>
      <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Container
          maxWidth={false}
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
          disableGutters
        >
          <DrawerButtonBox open={isDrawerOpen}>
            <IconButton aria-label='open drawer' color='inherit' edge='start' sx={{ mr: 2 }} onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </DrawerButtonBox>
          <Typography variant='h2'>Channel name</Typography>
        </Container>
        <Box sx={{ display: 'flex' }}>
          <ChatMenu />
          <ThemeIcon />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
