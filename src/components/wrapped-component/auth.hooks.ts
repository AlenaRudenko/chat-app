import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store/store'
import { authLogin } from '../../store/user-slice/thunk'
import { LocalService } from '../../services/LocalStore.service'

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true)

  const storeUser = useSelector((state: RootState) => state.user.user)
  const naviagate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (!isLoading) {
      return
    }

    if (storeUser) {
      return
    }

    setIsLoading(true)

    const localStorageUser = LocalService.getUserLogin()

    if (localStorageUser) {
      dispatch(
        authLogin({
          login: localStorageUser,
          navigateFn: () => {
            setIsLoading(false)
            naviagate('/main')
          },
        }),
      )
    } else {
      setIsLoading(false)
      naviagate('/auth')
    }
  }, [storeUser, naviagate, dispatch, isLoading])

  return isLoading
}
