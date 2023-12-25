import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import {type BoxProps as MuiBoxProps} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { ThemeIcon } from "../../theme-icon/ThemeIcon"
import { styled, useTheme } from '@mui/material/styles'

interface IProps {
    handleDrawerOpen:() => void;
    handleMenuClick:(event: React.MouseEvent<HTMLElement>) => void;
    handleMenuClose:() => void;
    isMenuOpen:boolean;
    anchorEl:null | HTMLElement;
    isDrawerOpen:boolean;
}

type HeaderBoxProps = {
    open?: boolean
  } & MuiBoxProps


const DrawerButtonBox = styled(Box,{shouldForwardProp: (prop) => prop !== 'open',
})<HeaderBoxProps>(({theme, open}) => ({
    display: 'flex', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    ...(open && {
        width:`300px`,
        transition: theme.transitions.create( 'width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(!open && {
        width: `50px`,
    transition: theme.transitions.create( 'width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    })
}))

export const ChatHeader = ({handleDrawerOpen, handleMenuClick, handleMenuClose,isMenuOpen,anchorEl, isDrawerOpen}:IProps) => {
    const theme = useTheme();
    return       <AppBar elevation={0} position='fixed' sx={{ height: '64px', backgroundColor: theme.palette.primary.dark }}>
    <Toolbar sx={{ width:'100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Container maxWidth={false} disableGutters sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <DrawerButtonBox open={isDrawerOpen} >
 <IconButton  aria-label='open drawer' color='inherit' edge='start' sx={{ mr: 2 }} onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>     
      
        </DrawerButtonBox>
<Typography variant="h2">Channel name</Typography>
        </Container>

      <Box sx={{display:'flex'}}>
        <IconButton
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          id='demo-positioned-button'
          onClick={handleMenuClick}
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
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Покинуть канал</MenuItem>
          <MenuItem onClick={handleMenuClose}>Выйти из аккаунта</MenuItem>
        </Menu>
        <ThemeIcon />
      </Box>
    </Toolbar>
  </AppBar>
}