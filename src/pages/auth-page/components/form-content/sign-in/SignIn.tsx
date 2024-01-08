import { AuthForm } from '../../../../../components/input-submit/AuthForm'
import { useSignin } from './signin.hook'

type TProps = {
  login: string
  onInputChange: (value: string) => void
  onClickAuthBtnChange: () => void
}

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
