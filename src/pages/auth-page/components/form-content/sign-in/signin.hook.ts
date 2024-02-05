import { authLogin } from '../../../../../store/user-slice/thunk'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getAuthError } from '../../../../../store/store'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

export const useSignin = (login: string) => {
  const error = useSelector(getAuthError)

  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      console.log('eeeeee', error)
      enqueueSnackbar('error', { variant: 'error' })
    }
  }, [enqueueSnackbar, error])

  const handleSubmit = () => {
    dispatch(authLogin({ login, navigateFn: () => navigate('/main') }))
  }

  return {
    handleSubmit,
  }
}
