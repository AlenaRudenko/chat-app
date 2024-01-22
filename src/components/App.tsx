import './style.scss'
import { Outlet } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useAppTheme } from '../hooks/useAppTheme'
import { MyThemeContext } from '../theme-context/themeContext'
import { SnackbarProvider } from 'notistack'
import { useConnectSocket } from '../hooks/useConnectSocket'
import { ApiService } from '../services/Api.service'

export const App = () => {
  const [theme, setTheme] = useAppTheme()
  useConnectSocket()
  ApiService.getUsers().then((res) => console.log(res.data))
  return (
    <div>
      <MyThemeContext.Provider value={setTheme}>
        <SnackbarProvider autoHideDuration={1500} maxSnack={2}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Outlet />
          </ThemeProvider>
        </SnackbarProvider>
      </MyThemeContext.Provider>
    </div>
  )
}
