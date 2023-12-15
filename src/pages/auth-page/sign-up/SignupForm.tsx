import { InputSubmitForm } from '../../../components/input-submit/InputSubmit'

interface IProps {
  setAuthForm: (value: string) => void
}

export const SignupForm = ({ setAuthForm }: IProps) => {
  const handleForm = () => {
    setAuthForm('signin')
  }
  return (
    <InputSubmitForm
      handleForm={handleForm}
      buttonTitle='SIGN IN'
      handleInput={() => {}}
      handleSubmit={() => {}}
      inputValue=''
    />
  )
}
