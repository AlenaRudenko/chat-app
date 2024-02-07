import { Box, CircularProgress, useTheme } from '@mui/material'
import classes from './ModalPage.module.scss'

export const LoadingPage = () => {
  const theme = useTheme()

  return (
    <Box
      className={classes.box}
      sx={{
        background: theme.palette.background.default,
      }}
    >
      <CircularProgress color='primary' size={100} />
    </Box>
  )
}
