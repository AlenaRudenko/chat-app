import { AppBarProps } from './types'
import { styled, useTheme } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { drawerWidth } from '../../../../../constants/drawerWidth'
import { useDrawer } from '../../../store/drawerContext'
import { IChildrenProp } from '../../../../../interfaces/childrenProp'

const MyApp = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.primary.dark,
  ...(!open && {
    width: `calc(100% - ${theme.spacing(7)} )`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.spacing(9)})`,
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
}))

const MyAppBar = ({ children }: IChildrenProp) => {
  const theme = useTheme()

  const { isDrawerOpen } = useDrawer()
  return (
    <MyApp
      elevation={0}
      open={isDrawerOpen}
      position='fixed'
      sx={{ top: 'auto', bottom: 0, borderLeft: `0.1px solid ${theme.palette.primary.dark}` }}
    >
      {children}
    </MyApp>
  )
}

MyAppBar.displayName = 'MyAppBar'
export default MyAppBar
