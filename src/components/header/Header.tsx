import { Box, Container, IconButton, styled } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Logo } from '../logo/Logo'

const StyledBox = styled(Box)(({ theme }) => ({
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity 600ms, visibility 600ms',

  [theme.breakpoints.down('md')]: {
    visibility: 'visible',
    opacity: 1,
  },
}))

interface IProps {
  isDarkTheme: boolean
  toggleDarkTheme: () => void
}

export const Header = ({ isDarkTheme, toggleDarkTheme }: IProps) => {
  return (
    <Container maxWidth={false} sx={{ margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
      <StyledBox>
        <Logo />
      </StyledBox>
      <IconButton onClick={toggleDarkTheme}>{isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
    </Container>
  )
}
