import { TState } from '../../store/user-slice/types'
import { LocalService } from '../../services/LocalStore.service'
import { store } from '../../store/store'
import { authLogin } from '../../store/user-slice/thunk'


export const mainPageLoader = () =>
  new Promise<string>((resolve, reject) =>
    setTimeout(() => {
      const user = LocalService.getUserLogin()
      const userStore = store.getState().user.user as TState['user']

      if (!user && !userStore) {
        reject('')
      } else if (user && !userStore) {
        store.dispatch(
          authLogin({
            login: user,
          }),
        )
        resolve(user)
      }

      resolve(user)
    }, 50),
  )
