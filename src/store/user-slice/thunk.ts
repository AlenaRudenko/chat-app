import { createAsyncThunk } from '@reduxjs/toolkit'
import IUser from '../../interfaces/User'
import { ApiService } from '../../services/Api.service'
import { LocalService } from '../../services/LocalStore.service'
import { TProps } from './types'

export const authLogin = createAsyncThunk<IUser, TProps, { rejectValue: string }>(
  'user/authLogin',
  async ({ login, navigateFn }, { rejectWithValue }) => {
    try {
      const response = await ApiService.getUserByNickName(login)

      const currentUser = response.data[0]

      if (response.status !== 200) {
        return rejectWithValue('Сервер недоступен')
      } else if (!currentUser) {
        return rejectWithValue('Пользователя не существует, зарегистрируйтесь, чтобы войти')
      }

      LocalService.setUserLogin(currentUser.nickName)

      navigateFn && navigateFn()

      return currentUser
    } catch (error) {
      return rejectWithValue('Пользователя не существует, зарегистрируйтесь, чтобы войти')
    }
  },
)

export const regUser = createAsyncThunk<string, TProps, { rejectValue: string }>(
  'user/regUser',
  async ({ login, navigateFn }, { rejectWithValue, dispatch }) => {
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

export const logoutUser = createAsyncThunk<Promise<string>, () => void>('user/logoutUser', (navigateFn) => {
  return new Promise<string>((resolve) => {
    setTimeout(async () => {
      const response = await LocalService.clearUserLogin()
    }, 50)
    navigateFn && navigateFn()
    resolve('success')
  })
})
