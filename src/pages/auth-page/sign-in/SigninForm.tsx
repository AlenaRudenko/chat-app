import { InputSubmitForm } from '../../../components/input-submit/InputSubmit'
interface IProps {
  setAuthForm: (value: string) => void
}
export const SigninForm = ({ setAuthForm }: IProps) => {
  const handleForm = () => {
    setAuthForm('signup')
  }
  return (
    <InputSubmitForm
      handleForm={handleForm}
      buttonTitle='SIGN UP'
      handleInput={() => {}}
      handleSubmit={() => {}}
      inputValue=''
    />
  )
}
