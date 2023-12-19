import { Box, Container, IconButton, styled, useTheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Logo } from '../logo/Logo'
import { MyThemeContext } from '../../theme-context/themeContext'
import { useContext } from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity 600ms, visibility 600ms',

  [theme.breakpoints.down('md')]: {
    visibility: 'visible',
    opacity: 1,
  },
}))

export const Header = () => {
  const theme = useTheme()
  const toggleTheme = useContext(MyThemeContext)
  return (
    <Container
      maxWidth={false}
      sx={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <StyledBox>
        <Logo />
      </StyledBox>
      <IconButton onClick={toggleTheme}>
        {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Container>
  )
}
