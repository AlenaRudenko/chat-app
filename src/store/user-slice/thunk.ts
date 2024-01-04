import { createAsyncThunk } from '@reduxjs/toolkit'
import IUser from '../../interfaces/User'
import { ApiService } from '../../services/Api.service'
import { LocalService } from '../../services/LocalStore.service'

export const authLogin = createAsyncThunk(
  'user/authLogin',
  async (userData: { id?: string; login?: string }, { rejectWithValue }) => {
    try {
      const response = await ApiService.getUsers()
      const users = response.data.users
      const currentUser = users.find((user: IUser) => {
        if (userData.login) {
          return user.nickName === userData.login
        }
        return user.id === userData.id
      })
      if (response.statusText !== 'OK') {
        throw new Error('Server error!')
      } else if (!currentUser) {
        throw new Error('Пользователя не существует !')
      }
      LocalService.setUserId(currentUser.id)
      return currentUser
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
