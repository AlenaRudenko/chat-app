import { IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { MyThemeContext } from "../../theme-context/themeContext"
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export const ThemeIcon = () => {
    const theme = useTheme()
    const toggleTheme = useContext(MyThemeContext)
    return  <IconButton onClick={toggleTheme}>
    {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
  </IconButton>
}