import { Box, Grid, Paper } from '@mui/material'
import { MainHeader } from '../../../../components/header/main-header/MainHeader'
import classes from '../../Authpage.module.scss'
import { useEffect, useState } from 'react'
import { TState } from './types'
import { SignIn } from './sign-in/SignIn'
import { SignUp } from './sign-up/SignUp'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../store/store'
import { clearErrors } from '../../../../store/user-slice/userSlice'
import { ApiService } from '../../../../services/Api.service'

export const FormContent = () => {
  const [authType, setAuthType] = useState<TState['authType']>('signin')
  const [login, setLogin] = useState('')

  const dispath = useDispatch<AppDispatch>()

  const handleLoginChange = (value: string) => {
    setLogin(value)
  }

  const handleOnClickBtnSing = () => {
    setAuthType((authType) => (authType === 'signin' ? 'signup' : 'signin'))
    dispath(clearErrors())
  }

  return (
    <Grid className={classes.paper} md={6} sm={12} xs={12} item>
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
          {authType === 'signin' ? (
            <SignIn {...{ login }} onClickAuthBtnChange={handleOnClickBtnSing} onInputChange={handleLoginChange} />
          ) : (
            <SignUp {...{ login }} onClickAuthBtnChange={handleOnClickBtnSing} onInputChange={handleLoginChange} />
          )}
        </Box>
      </Paper>
    </Grid>
  )
}
