import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { ThemeIcon } from '../../theme-icon/ThemeIcon'
import { useTheme } from '@mui/material/styles'
import DrawerButtonBox from './styles'
import { IProps } from './types'

export const ChatHeader = ({ handleDrawerOpen, handleMenu, anchorEl, isDrawerOpen }: IProps) => {
  const theme = useTheme()

  const isMenuOpen = Boolean(anchorEl)

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
          <IconButton
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            id='demo-positioned-button'
            onClick={handleMenu}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            aria-labelledby='demo-positioned-button'
            id='demo-positioned-menu'
            open={isMenuOpen}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={handleMenu}
          >
            <MenuItem onClick={handleMenu}>Покинуть канал</MenuItem>
            <MenuItem onClick={handleMenu}>Выйти из аккаунта</MenuItem>
          </Menu>
          <ThemeIcon />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
