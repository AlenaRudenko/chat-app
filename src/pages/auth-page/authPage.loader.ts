import { LocalService } from '../../services/LocalStore.service'
import { store } from '../../store/store'
import { authLogin } from '../../store/user-slice/thunk'

export const authPageLoader = () =>
  new Promise<string>((resolve, reject) =>
    setTimeout(() => {
      const user = LocalService.getUserLogin()
      const userStore = store.getState().user.user

      if (!user && !userStore) {
        resolve(user)
      } else if (user && !userStore) {
        store.dispatch(
          authLogin({
            login: user,
          }),
        )
        reject('')
      }
    }, 50),
  )
