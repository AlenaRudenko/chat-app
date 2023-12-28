import Grid from '@mui/material/Grid'
import classes from './Authpage.module.scss'
import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Paper, Typography, styled, useTheme } from '@mui/material'
import { MainHeader } from '../../components/header/main-header/MainHeader'
import Illustration from '../../assets/Illustration.png'
import { Logo } from '../../components/logo/Logo'
import { SigninForm } from './sign-in/SigninForm'
import { SignupForm } from './sign-up/SignupForm'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { authLogin } from '../../store/user-slice/userSlice'
import { useSnackbar } from 'notistack'

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
  const [authForm, setAuthForm] = useState('signin');
  const [value, setValue] = useState<string>('')
  const handleInput = (valueInput:string) => {
    setValue(valueInput)
  }
  const dispatch = useDispatch<AppDispatch>()
  const handleLogin = () => {
    dispatch(authLogin(value))
  }
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {user, error, status} = useSelector((state:RootState) => state.user);
  useEffect(() => {
   if(error) {
    enqueueSnackbar("Пользователя не существует", { variant: 'error'})
   } 
  },[error])
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
              <MainHeader />

              <Box
                sx={{
                  display: 'flex',
                  width: '40%',
                  minHeight: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {authForm === 'signin' ? <SigninForm key={'signin'}{...{ setAuthForm,handleInput, value,handleLogin }} /> : <SignupForm key={'signup'}{...{ setAuthForm,handleInput,value }} />}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
