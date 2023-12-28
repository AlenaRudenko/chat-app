import { TEvent } from '../../../interfaces/event';
import { InputSubmitForm } from '../../../components/input-submit/InputSubmitForm'

type IProps = {
  setAuthForm: (value: string) => void;
  handleInput:(value:string) => void;
  value:string
}

export const SignupForm = ({ setAuthForm,handleInput, value }: IProps) => {
  const handleForm = () => {
    setAuthForm('signin')
  }
  return (
    <InputSubmitForm
      buttonTitle='SIGN UP'
      handleForm={handleForm}
      handleInput={handleInput}
      handleSubmit={() => {}}
      inputValue={value}
    />
  )
}
