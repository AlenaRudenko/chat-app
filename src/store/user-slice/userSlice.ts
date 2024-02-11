import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { authLogin, logoutUser, regUser } from './thunk'
import { TState } from './types'
import { isErrorFn } from '../errorFn'

const initialState = {
  user: null,
  error: null,
} as TState

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null
    },
    setValidationError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.error = null
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload
      })

      .addCase(regUser.pending, (state, action) => {
        state.error = null
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.error = null
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
      })
      .addMatcher(isErrorFn, (state, action: PayloadAction<string>) => {
        state.error = action.payload
      })
  },
})

export const { clearErrors, setValidationError } = userSlice.actions
// export const {setUser} = userSlice.actions
export default userSlice.reducer
