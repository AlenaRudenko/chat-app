
import { InputSubmitForm } from '../../../components/input-submit/InputSubmitForm'
type IProps = {
  setAuthForm: (value: string) => void;
  handleInput:(value:string) => void;
  value:string;
  handleLogin:() => void
}

export const SigninForm = ({ setAuthForm,handleInput, value,handleLogin }: IProps) => {
  
  const handleForm = () => {
    setAuthForm('signup')
  }
  return (
    <InputSubmitForm
      buttonTitle='SIGN IN'
      handleForm={handleForm}
      handleInput={handleInput}
      handleSubmit={handleLogin}
      inputValue={value}
    />
  )
}
