import { Button, Paper, useTheme } from '@mui/material'
import { useAppTheme } from '../../hooks/useAppTheme'

export const MainPage = () => {
  const [theme] = useAppTheme()
  return (
    <div>
      <Paper
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}
        sx={{
          justifyContent: 'center',
          background: theme.palette.background.default,
        }}
        square
      >
        <Button color='primary' variant='contained' disableElevation onClick={() => {}}>
          hello
        </Button>
      </Paper>
    </div>
  )
}
