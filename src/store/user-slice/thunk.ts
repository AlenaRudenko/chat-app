import { createAsyncThunk } from '@reduxjs/toolkit'
import IUser from '../../interfaces/User'
import { ApiService } from '../../services/Api.service'
import { LocalService } from '../../services/LocalStore.service'

type TProps = {
  login: string
  navigateFn?: () => void
}

export const authLogin = createAsyncThunk<IUser, TProps, { rejectValue: string }>(
  'user/authLogin',
  async ({ login, navigateFn }, { rejectWithValue }) => {
    try {
      const response = await ApiService.getUserByNickName(login)

      const currentUser = response.data[0]

      if (response.status !== 200) {
        return rejectWithValue('Server error')
      } else if (!currentUser) {
        return rejectWithValue('Пользователя не существует, зареристрируйтесь, чтобы войти')
      }

      LocalService.setUserLogin(currentUser.nickName)

      navigateFn && navigateFn()

      return currentUser
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const regUser = createAsyncThunk(
  'user/regUser',
  async ({ login, navigateFn }: TProps, { rejectWithValue, dispatch }) => {
    try {
      const userResponse = await ApiService.getUsers()
      const users = userResponse.data

      const isExist = users.find((user) => user.nickName === login)

      if (isExist) {
        return rejectWithValue('Такой пользователь уже существует')
      }
      if (userResponse.status !== 200) {
        return rejectWithValue('Server error')
      }
      const response = await ApiService.createUser(login)

      if (response.status !== 201) {
        return rejectWithValue('Server create action error')
      }
      dispatch(authLogin({ ...{ login, navigateFn } }))
      return 'success'
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const logoutUser = createAsyncThunk('user/logoutUser', (navigateFn: () => void) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(async () => {
      const response = await LocalService.clearUserLogin()
    }, 50)
    navigateFn && navigateFn()
    resolve('success')
  })
})
