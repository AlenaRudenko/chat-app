import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getUserError } from '../../../../../store/store'
import { regUser } from '../../../../../store/user-slice/thunk'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setValidationError } from '../../../../../store/user-slice/userSlice'

type TProps = string

export const useSignup = (login: TProps) => {
  const error = useSelector(getUserError)

  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' })
    }
  }, [enqueueSnackbar, error])

  const handleSubmit = () => {
    const validLogin = login.trim()
    if (validLogin.split('').includes(' ')) {
      dispatch(setValidationError('В userName не должно быть пробелов'))
    } else {
      dispatch(regUser({ login: validLogin, navigateFn: () => navigate('/main') }))
    }
  }

  return {
    handleSubmit,
  }
}
