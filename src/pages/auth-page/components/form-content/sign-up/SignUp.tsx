import { AuthForm } from '../../../../../components/input-submit/AuthForm'
import { useSignup } from './signup.hooks'

type TProps = {
  login: string
  onInputChange: (value: string) => void
  onClickAuthBtnChange: () => void
}

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
