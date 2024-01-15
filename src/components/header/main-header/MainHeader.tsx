import { Container } from '@mui/material'
import { Logo } from '../../logo/Logo'
import { ThemeIcon } from '../../theme-icon/ThemeIcon'
import { StyledBox } from './styles'
import { memo } from 'react'
import { useSelector } from 'react-redux'

export const MainHeader = memo(() => {
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
})
