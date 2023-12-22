
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Settings from '@mui/icons-material/Settings';
import SendIcon from '@mui/icons-material/Send';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { AppBar, Avatar, Container, Menu, MenuItem, Paper, TextField } from '@mui/material';
import { ChatLayout } from './chat-layout/ChatLayout';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { ThemeIcon } from '../../components/theme-icon/ThemeIcon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';

const drawerWidth = 300;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const MyAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor:theme.palette.primary.dark,
...(!open && {
width: `calc(100% - ${theme.spacing(7)} )`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - 50px)`,
  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  display:'flex',
  alignItems:'flex-end',
  justifyContent:'center',
  height:'100vh',
  // padding: theme.spacing(3),
  scrollbarGutter: 'stable both-edges',
  flexWrap: 'wrap',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  top:'64px',
  border:'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  top:'64px',
  border:'none',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: '50px',
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      '& .MuiDivider':openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




const ChatTextField = styled(TextField)(({theme}) => ({
  
  "& .MuiInput-underline::before":{
    borderBottom: 'none' ,
  },
  "& .MuiInput-underline::after":{
    borderBottom: 'none' ,
  },
}))

export const MainPage = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuopen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuOpen = Boolean(anchorEl);
  return (
    <Box sx={{ display: 'flex', minHeight:'100vh', alignItems:'center' }}>
      
      <CssBaseline />
      <AppBar sx={{ height:'64px', backgroundColor:theme.palette.primary.dark }} position="fixed" elevation={0}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          
          </IconButton>
            <div>
              <IconButton 
                   id="demo-positioned-button"
                   aria-controls={open ? 'demo-positioned-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick}>
                  <MoreVertIcon />
              </IconButton>
              <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={menuopen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
    horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Покинуть канал</MenuItem>
        <MenuItem onClick={handleClose}>Выйти из аккаунта</MenuItem>
      </Menu>
          <ThemeIcon />
            </div>
        </Toolbar>
      </AppBar>
      <Drawer

        variant='permanent' 
        anchor="left"
        open={open}
      >
       
        <Divider sx={{border:'none'}}/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts','Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton  sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                <ListItemIcon  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Paper sx={{ display:'flex',
  alignItems:'flex-end',
  justifyContent:'center',width:'100%',
  height:'100%', background:theme.palette.background.default,}}>
                <DrawerHeader />
        <Container maxWidth={false} disableGutters >
          <ChatLayout />
          </Container>

        <DrawerHeader />
        </Paper>
  
      </Main>
      <MyAppBar open={open} elevation={0} position='fixed' sx={{ top: 'auto', bottom: 0, borderLeft:`0.1px solid ${theme.palette.primary.dark}`}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center',bgcolor:theme.palette.background.paper}}> 
          <ChatTextField fullWidth placeholder="Ответить..." variant="standard" ></ChatTextField>
          <IconButton>
            <SendIcon />
          </IconButton>
        </Toolbar>
      </MyAppBar>
    </Box>
  );
}
