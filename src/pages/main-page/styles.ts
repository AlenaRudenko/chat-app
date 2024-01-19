import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  background: theme.palette.background.default,
}))
