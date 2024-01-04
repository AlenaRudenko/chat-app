import { Container } from '@mui/material'
import { Logo } from '../../logo/Logo'
import { ThemeIcon } from '../../theme-icon/ThemeIcon'
import { StyledBox } from './styles'

export const MainHeader = () => {
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
