import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'
import { Logo } from '../../../../components/logo/Logo'
import Illustration from '../../../../assets/Illustration.png'
import classes from './PreviewContent.module.scss'

export const PreviewContent = () => {
  const theme = useTheme()
  return (
    <Grid md={6} item>
      <Paper
        className={classes.paper}
        sx={{
          background: theme.palette.background.default,
        }}
        square
      >
        <Box className={classes.box} component={Grid} display={{ xs: 'none', md: 'flex' }} md={12} item>
          <Box className={classes.contentBox}>
            <Logo />
            <Box className={classes.contentBox__imgTitle}>
              <img alt='' height='356.65px' src={Illustration} width='446.61px' />
              <Typography mt={4} textAlign='center' variant='h3'>
                Online Community For Front-end Developers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}
