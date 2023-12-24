import { InputSubmitForm } from '../../../components/input-submit/InputSubmit'

type IProps = {
  setAuthForm: (value: string) => void
}

export const SignupForm = ({ setAuthForm }: IProps) => {
  const handleForm = () => {
    setAuthForm('signin')
  }
  return (
    <InputSubmitForm
      buttonTitle='SIGN IN'
      handleForm={handleForm}
      handleInput={() => {}}
      handleSubmit={() => {}}
      inputValue=''
    />
  )
}
