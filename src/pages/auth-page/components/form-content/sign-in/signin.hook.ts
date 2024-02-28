import { authLogin } from '../../../../../store/user-slice/thunk'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getUserError } from '../../../../../store/store'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

export const useSignin = (login: string) => {
  const error = useSelector(getUserError)

  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' })
    }
  }, [enqueueSnackbar, error])

  const handleSubmit = () => {
    const validLogin = login.trim()
    dispatch(authLogin({ login: validLogin, navigateFn: () => navigate('/main') }))
  }

  return {
    handleSubmit,
  }
}
