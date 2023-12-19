import Grid from '@mui/material/Grid'
import classes from './Authpage.module.scss'
import { useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Paper, Typography, styled, useTheme } from '@mui/material'
import { Header } from '../../components/header/Header'
import Illustration from '../../assets/Illustration.png'
import { Logo } from '../../components/logo/Logo'
import { SigninForm } from './sign-in/SigninForm'
import { SignupForm } from './sign-up/SignupForm'

const styledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '40%',
  minHeight: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '60%',
  },
}))
export const AuthPage = () => {
  const [authForm, setAuthForm] = useState('signin')
  const theme = useTheme()
  return (
    <div>
      <Container maxWidth={false} disableGutters>
        <Grid
          sx={{ height: '100vh', justifyContent: 'center', backgroundColor: 'red', alignItems: 'center' }}
          container
        >
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
                background: (): string => {
                  if (theme.palette.mode === 'dark') {
                    return 'linear-gradient(180deg, #4c3a51,#b25068,#e7ab79)'
                  }
                  return 'linear-gradient(180deg, #076585,#92bbc9,#ffffff)'
                },
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
          <Grid className={classes.paper} md={6} sm={12} spacing={2} xs={12} item>
            <Paper
              style={{
                height: '100vh',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: 'flex',
              }}
              square
            >
              <Header />

              <Box
                sx={{
                  display: 'flex',
                  width: '40%',
                  minHeight: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {authForm === 'signin' ? <SigninForm {...{ setAuthForm }} /> : <SignupForm {...{ setAuthForm }} />}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
