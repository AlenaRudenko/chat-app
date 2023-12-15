import Grid from '@mui/material/Grid'
import classes from './Authpage.module.scss'
import { lightTheme, darkTheme } from '../../theme/themes'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Box, IconButton, Paper, TextField, Typography } from '@mui/material'
import { Header } from '../../components/header/Header'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Illustration from '../../assets/Illustration.png'
export const AuthPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Typography>
          <Container maxWidth={false} disableGutters>
            <Grid
              sx={{ height: '100vh', justifyContent: 'center', backgroundColor: 'red', alignItems: 'center' }}
              container
            >
              <Grid md={6} item>
                <Paper
                  style={{
                    display: 'flex',
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
                  <img alt='' height='356.65px' src={Illustration} width='446.61px' />
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
                      width: '30%',
                      minHeight: '90%',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TextField margin='normal' variant='standard' fullWidth label='NickName' />
                    <Button className={classes.Button} color='primary' variant='contained' disableElevation>
                      Sign in
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>{' '}
        </Typography>
      </ThemeProvider>
    </div>
  )
}
