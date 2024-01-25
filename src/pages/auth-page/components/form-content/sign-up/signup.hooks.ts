import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getRegError } from '../../../../../store/store'
import { regUser } from '../../../../../store/user-slice/thunk'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

type TProps = string

export const useSignup = (login: TProps) => {
  const error = useSelector(getRegError)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Пользователь уже существует', { variant: 'error' })
      console.log(error)
    }
  }, [enqueueSnackbar, error])

  const handleSubmit = () => {
    dispatch(regUser({ login, navigateFn: () => navigate('/main') }))
  }

  return {
    handleSubmit,
  }
}
