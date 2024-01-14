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
      const response = await ApiService.getUsers()

      const users = response.data.users

      const currentUser = users.find((user: IUser) => {
        return user.nickName === login
      })

      if (response.statusText !== 'OK') {
        return rejectWithValue('Server error')
      } else if (!currentUser) {
        return rejectWithValue('Пользователь уже существует')
      }

      LocalService.setUserLogin(currentUser.nickName)

      navigateFn && navigateFn()

      return currentUser
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const regUser = createAsyncThunk('user/regUser', async (user: { nickName: string }, { rejectWithValue }) => {
  try {
    const response = await ApiService.createUser(user)

    if (response.statusText !== 'OK') {
      throw new Error('Такой пользователь уже существует')
    }

    return authLogin({ login: user.nickName, navigateFn: () => {} })
  } catch (error) {
    return rejectWithValue(error.message)
  }
})
