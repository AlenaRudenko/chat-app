import {  styled } from "@mui/material/styles"
import { type Theme, type CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import { Divider, List, ListItem, ListItemButton } from "@mui/material"
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import ListItemText from '@mui/material/ListItemText'
const drawerWidth = 300

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    top: '64px',
    border: 'none',
    height: `calc(100vh - 64px)`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  })
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    top: '64px',
    border: 'none',
    height: `calc(100vh - 64px)`,
    width: `calc(${theme.spacing(7)} + 3px)`,
    [theme.breakpoints.up('sm')]: {
      width: '50px',
    },
  })
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      '& .MuiDivider': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }))
  
interface IProps {
    isDrawerOpen:boolean;

}

export const ChannelDrawer = ({isDrawerOpen}:IProps) => {
    return   <Drawer anchor='left' open={isDrawerOpen} variant='permanent'>
    <Divider sx={{ border: 'none' }} />
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts'].map(
        (text, index) => (
          <ListItem key={text} sx={{ display: 'block' }} disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ),
      )}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
}