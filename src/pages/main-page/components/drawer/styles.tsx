import { type Theme, type CSSObject, styled } from '@mui/material/styles'
import { drawerWidth } from '../../../../constants/drawerWidth'
import MuiDrawer from '@mui/material/Drawer'
import { useDrawer } from '../../store/drawerContext'
import { TDrawerProps } from './types'
import { Avatar, ListItemText } from '@mui/material'

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
  width: `calc(${theme.spacing(9)} )`,
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

const StyledDrawer = ({ children }: TDrawerProps) => {
  const { isDrawerOpen } = useDrawer()
  return (
    <Drawer anchor='left' open={isDrawerOpen} variant='permanent'>
      {children}
    </Drawer>
  )
}
StyledDrawer.displayName = 'StyledDrawer'
export default StyledDrawer

export const StyledAvatar = ({ children, channelColor }: { children: string; channelColor: string }) => {
  const { isDrawerOpen } = useDrawer()
  return (
    <Avatar
      sx={{
        width: 32,
        height: 32,
        mr: isDrawerOpen ? 3 : 'auto',
        justifyContent: 'center',
        backgroundColor: channelColor,
      }}
    >
      {children}
    </Avatar>
  )
}
StyledAvatar.displayName = 'StyledAvatar'

export const StyledListItemText = ({ channelName }: { channelName: string }) => {
  const { isDrawerOpen } = useDrawer()
  return <ListItemText primary={channelName} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
}
StyledListItemText.displayName = 'StyledListItemText'
