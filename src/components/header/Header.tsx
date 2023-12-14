import { Container, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
interface IProps {
  isDarkTheme: boolean
  toggleDarkTheme: () => void
}
export const Header = ({ isDarkTheme, toggleDarkTheme }: IProps) => {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={toggleDarkTheme}>{isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
    </Container>
  )
}
