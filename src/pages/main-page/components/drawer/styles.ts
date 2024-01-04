import { type Theme, type CSSObject, styled } from '@mui/material/styles'
import { drawerWidth } from '../../../../constants/drawerWidth'
import MuiDrawer from '@mui/material/Drawer'

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
export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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
