import { useCallback, useState } from 'react'
import { TState } from '../types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../../store/store'
import { clearErrors } from '../../../../../store/user-slice/userSlice'

export const useFormContent = () => {
  const [authType, setAuthType] = useState<TState['authType']>('signin')
  const [login, setLogin] = useState<TState['login']>('')

  const dispath = useDispatch<AppDispatch>()

  const handleLoginChange = useCallback((value: string) => {
    setLogin(value)
  }, [])

  const handleOnClickBtnSing = useCallback(() => {
    setAuthType((authType) => (authType === 'signin' ? 'signup' : 'signin'))
    dispath(clearErrors())
  }, [dispath])
  return { authType, login, handleLoginChange, handleOnClickBtnSing }
}
