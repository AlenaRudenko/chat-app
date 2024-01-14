import { Box, CircularProgress, useTheme } from '@mui/material'

export const LoadingPage = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.background.default,
      }}
    >
      <CircularProgress color='primary' size={100} />
    </Box>
  )
}
