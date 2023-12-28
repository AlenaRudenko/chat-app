import './style.scss'
import { Outlet } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useAppTheme } from '../hooks/useAppTheme'
import { MyThemeContext } from '../theme-context/themeContext'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

export const App = () => {
  const [theme, setTheme] = useAppTheme()
  return (
    <div>
      <MyThemeContext.Provider value={setTheme}>
      <SnackbarProvider maxSnack={2} autoHideDuration={1500}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
        </SnackbarProvider>
      </MyThemeContext.Provider>
    </div>
  )
}
