import './style.scss'
import { Outlet } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useAppTheme } from '../hooks/useAppTheme'
import { MyThemeContext } from '../theme-context/themeContext'

export const App = () => {
  const [theme, setTheme] = useAppTheme()
  return (
    <div>
      <MyThemeContext.Provider value={setTheme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
      </MyThemeContext.Provider>
    </div>
  )
}
