import { AuthForm } from '../../../../../components/input-submit/AuthForm'
import { useSignin } from './signin.hook'
import { TProps } from './types'

export const SignIn = ({ login, onInputChange, onClickAuthBtnChange }: TProps) => {
  const { handleSubmit } = useSignin(login)
  return (
    <AuthForm
      authChangeButtonText='SIGN UP'
      authChangeText='You dont have Account?'
      submitButtonText='SIGN IN'
      value={login}
      onSubmit={handleSubmit}
      {...{ onInputChange, onClickAuthBtnChange }}
    />
  )
}
