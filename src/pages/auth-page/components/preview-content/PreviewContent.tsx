import { Box, Container, Grid, Paper, type Theme, Typography } from '@mui/material'
import { Logo } from '../../../../components/logo/Logo'
import Illustration from '../../../../assets/Illustration.png'

type TProps = {
  theme: Theme
}
export const PreviewContent = ({ theme }: TProps) => {
  return (
    <Grid md={6} item>
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
        <Box component={Grid} display={{ xs: 'none', md: 'flex' }} md={12} sx={{ height: '100vh' }} item>
          <Container
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'centrer ',
              justifyContent: 'space-evenly',
              flexDirection: 'column',
            }}
          >
            <Logo />
            <Container
              maxWidth={false}
              sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
            >
              <img alt='' height='356.65px' src={Illustration} width='446.61px' />{' '}
              <Typography mt={4} textAlign='center' variant='h3'>
                Online Community For Front-end Developers
              </Typography>
            </Container>
          </Container>
        </Box>
      </Paper>
    </Grid>
  )
}
