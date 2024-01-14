import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getRegError } from '../../../../../store/store'
import { regUser } from '../../../../../store/user-slice/thunk'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'

type TProps = string

export const useSignup = (login: TProps) => {
  const error = useSelector(getRegError)

  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Пользователь уже существует', { variant: 'error' })
    }
  }, [enqueueSnackbar, error])

  const handleSubmit = () => {
    dispatch(regUser({ nickName: login }))
  }

  return {
    handleSubmit,
  }
}
