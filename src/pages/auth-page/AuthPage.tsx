import { Box, Container } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import classes from './Authpage.module.scss'

export const AuthPage = () => {
  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid2 columns={16} minHeight={160} rowSpacing={12} container>
        <Grid2 xs={8}>dd</Grid2>
        <Grid2 xs={8}>dd</Grid2>
      </Grid2>
    </Container>
  )
}
