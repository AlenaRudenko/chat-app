import classes from './FormContent.module.scss'
import { Box, Grid, Paper } from '@mui/material'
import { MainHeader } from '../../../../components/header/main-header/MainHeader'
import { SignIn } from './sign-in/SignIn'
import { SignUp } from './sign-up/SignUp'
import { useFormContent } from './hooks/useFormContent'

export const FormContent = () => {
  const { authType, login, handleLoginChange, handleOnClickBtnSing } = useFormContent()

  return (
    <Grid className={classes.grid} md={6} sm={12} xs={12} item>
      <Paper className={classes.paper} square>
        <MainHeader />
        <Box className={classes.authBox}>
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
