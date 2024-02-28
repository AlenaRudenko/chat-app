import { TState } from '../../store/user-slice/types'
import { LocalService } from '../../services/LocalStore.service'
import { store } from '../../store/store'
import { authLogin } from '../../store/user-slice/thunk'
import { setUserChannels } from '../../store/channels-slice/thunk'

export const mainPageLoader = () =>
  new Promise<string>((resolve, reject) =>
    setTimeout(async () => {
      const user = LocalService.getUserLogin()
      const userStore = store.getState().user.user as TState['user']

      if (!user && !userStore) {
        reject('')
      } else if (user && !userStore) {
        const response = await store.dispatch(
          authLogin({
            login: user,
          }),
        )
        store.dispatch(setUserChannels())
        resolve(user)
      }
      store.dispatch(setUserChannels())
      resolve(user)
    }, 50),
  )
