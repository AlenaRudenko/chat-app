import Grid from '@mui/material/Grid'
import classes from './Authpage.module.scss'
import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Paper, Typography, useTheme } from '@mui/material'
import { MainHeader } from '../../components/header/main-header/MainHeader'
import Illustration from '../../assets/Illustration.png'
import { Logo } from '../../components/logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { useSnackbar } from 'notistack'
import { InputSubmitForm } from '../../components/input-submit/InputSubmitForm'
import { TState } from './types'
import { authLogin } from '../../store/user-slice/thunk'
import { LocalService } from '../../services/LocalStore.service'
import { useNavigate } from 'react-router-dom'

export const AuthPage = () => {
  const [value, setValue] = useState<TState['value']>('')
  const [authType, setAuthType] = useState<TState['authType']>('signin')

  const theme = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const state = useSelector((state: RootState) => state.user)

  const handleOnClickBtnSing = () => {
    setAuthType((authType) => (authType === 'signin' ? 'signup' : 'signin'))
  }

  const handleInput = (valueInput: string) => {
    setValue(valueInput)
  }

  const handleSubmit = () => {
    if (authType === 'signin') {
      dispatch(authLogin({ login: value }))
    } else dispatch(authLogin({ login: value }))
  }

  useEffect(() => {
    if (state.error) {
      enqueueSnackbar('Пользователя не существует', { variant: 'error' })
    }
  }, [enqueueSnackbar, state.error])

  useEffect(() => {
    const userId = LocalService.getUserId()
    if (userId) {
      dispatch(authLogin({ id: userId }))
    }
  }, [dispatch])
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
                <InputSubmitForm {...{ handleOnClickBtnSing, authType, handleInput, value, handleSubmit }} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
