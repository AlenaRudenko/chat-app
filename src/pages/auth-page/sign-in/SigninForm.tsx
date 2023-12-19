import { InputSubmitForm } from '../../../components/input-submit/InputSubmit'
type IProps = {
  setAuthForm: (value: string) => void
}
export const SigninForm = ({ setAuthForm }: IProps) => {
  const handleForm = () => {
    setAuthForm('signup')
  }
  return (
    <InputSubmitForm
      buttonTitle='SIGN UP'
      handleForm={handleForm}
      handleInput={() => {}}
      handleSubmit={() => {}}
      inputValue=''
    />
  )
}
