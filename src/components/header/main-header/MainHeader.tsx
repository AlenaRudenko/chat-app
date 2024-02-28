import { Box } from '@mui/material'
import { Logo } from '../../logo/Logo'
import { ThemeIcon } from '../../theme-icon/ThemeIcon'
import { StyledBox } from './styles'
import { memo } from 'react'
import classes from './MainHeader.module.scss'

export const MainHeader = memo(() => {
  return (
    <Box className={classes.containerHeader}>
      <StyledBox>
        <Logo />
      </StyledBox>
      <ThemeIcon />
    </Box>
  )
})
