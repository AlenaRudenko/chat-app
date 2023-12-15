import Grid from '@mui/material/Grid'
import classes from './Authpage.module.scss'
import { newLightTheme, newDarkTheme } from '../../theme/themes'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Box, Link, Paper, TextField, Typography, styled } from '@mui/material'
import { Header } from '../../components/header/Header'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Illustration from '../../assets/Illustration.png'
import { Logo } from '../../components/logo/Logo'
import { InputSubmitForm } from '../../components/input-submit/InputSubmit'
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
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [authForm, setAuthForm] = useState('signin')
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div>
      <ThemeProvider theme={isDarkTheme ? newDarkTheme : newLightTheme}>
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
                    if (isDarkTheme) {
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
                      <Typography mt={4} textAlign={'center'} variant='h3'>
                        Online Community For Front-end Developers
                      </Typography>
                    </Container>
                  </Container>
                </Box>
              </Paper>
            </Grid>
            <Grid className={classes.paper} md={6} spacing={2} sm={12} xs={12} item>
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
                <Header {...{ toggleDarkTheme, isDarkTheme }} />

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
        </Container>{' '}
      </ThemeProvider>
    </div>
  )
}
