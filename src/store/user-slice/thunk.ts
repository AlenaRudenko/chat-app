import { createAsyncThunk } from '@reduxjs/toolkit'
import IUser from '../../interfaces/User'
import { ApiService } from '../../services/Api.service'
import { LocalService } from '../../services/LocalStore.service'
import { AsynkFuncProps } from './types'

export const authLogin = createAsyncThunk<IUser, AsynkFuncProps, { rejectValue: string }>(
  'user/authLogin',
  async ({ login, navigateFn }, { rejectWithValue }) => {
    try {
      const [currentUser] = (await ApiService.getUserByNickName(login)).data

      if (!currentUser) {
        return rejectWithValue('Пользователя не существует, зарегистрируйтесь, чтобы войти')
      }

      LocalService.setUserLogin(currentUser.nickName)

      navigateFn && navigateFn()

      return currentUser
    } catch (error) {
      return rejectWithValue('Network Error')
    }
  },
)

export const regUser = createAsyncThunk<undefined, AsynkFuncProps, { rejectValue: string }>(
  'user/regUser',
  async ({ login, navigateFn }, { rejectWithValue, dispatch }) => {
    try {
      const users = (await ApiService.getUsers()).data

      const isExist = users.find((user) => user.nickName === login)

      if (isExist) {
        return rejectWithValue('Такой пользователь уже существует')
      }

      const response = await ApiService.createUser(login)

      if (response.status !== 201) {
        return rejectWithValue('Server create action error')
      }
      dispatch(authLogin({ ...{ login, navigateFn } }))
      return
    } catch (error) {
      return rejectWithValue('Server error')
    }
  },
)

export const logoutUser = createAsyncThunk<Promise<string>, () => void>('user/logoutUser', (navigateFn) => {
  return new Promise<string>((resolve) => {
    setTimeout(async () => {
      const response = await LocalService.clearUserLogin()
    }, 50)
    navigateFn && navigateFn()
    resolve('success')
  })
})
