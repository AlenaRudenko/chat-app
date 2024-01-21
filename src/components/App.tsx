import './style.scss'
import { Outlet } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useAppTheme } from '../hooks/useAppTheme'
import { MyThemeContext } from '../theme-context/themeContext'
import { SnackbarProvider } from 'notistack'
import { useConnectSocket } from '../hooks/useConnectSocket'

export const App = () => {
  const [theme, setTheme] = useAppTheme()
  useConnectSocket()
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
