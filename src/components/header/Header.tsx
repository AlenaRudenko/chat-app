import { Box, Container, styled, useTheme } from '@mui/material'
import { Logo } from '../logo/Logo'
import { ThemeIcon } from '../theme-icon/ThemeIcon'

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
      <ThemeIcon />
    </Container>
  )
}
