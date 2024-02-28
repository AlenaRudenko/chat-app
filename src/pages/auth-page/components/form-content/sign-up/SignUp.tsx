import { AuthForm } from '../../../../../components/input-submit/AuthForm'
import { useSignup } from './signup.hooks'
import { TProps } from './types'

export const SignUp = ({ login, onInputChange, onClickAuthBtnChange }: TProps) => {
  const { handleSubmit } = useSignup(login)

  return (
    <AuthForm
      authChangeButtonText='SIGN IN'
      authChangeText='You already have Account?'
      submitButtonText='SIGN UP'
      value={login}
      onSubmit={handleSubmit}
      {...{ onInputChange, onClickAuthBtnChange }}
    />
  )
}
