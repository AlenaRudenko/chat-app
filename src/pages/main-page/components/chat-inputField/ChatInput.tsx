import { styled, type AppBarProps as MuiAppBarProps, Toolbar, useTheme, IconButton, TextField } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import SendIcon from '@mui/icons-material/Send'

type AppBarProps = {
    open?: boolean
  } & MuiAppBarProps
  
const drawerWidth = 300

  const MyAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.dark,
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
  }))

  const ChatTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInput-underline::before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline::after': {
      borderBottom: 'none',
    },
  }))

  interface IProps {
    isDrawerOpen:boolean
  }
export const ChatInput = ({isDrawerOpen}:IProps) => {
    const theme = useTheme();
    return       <MyAppBar
    elevation={0}
    open={isDrawerOpen}
    position='fixed'
    sx={{ top: 'auto', bottom: 0, borderLeft: `0.1px solid ${theme.palette.primary.dark}` }}
  >
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: theme.palette.background.paper,
      }}
    >
      <ChatTextField placeholder='Ответить...' variant='standard' fullWidth />
      <IconButton>
        <SendIcon />
      </IconButton>
    </Toolbar>
  </MyAppBar>
}