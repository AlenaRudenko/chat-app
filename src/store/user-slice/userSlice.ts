import { createSlice } from '@reduxjs/toolkit'
import { authLogin, logoutUser, regUser } from './thunk'
import { TState } from './types'

const initialState = {
  user: null,
  authStatus: null,
  regStatus: null,
  authError: null,
  regError: null,
} as TState

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.authError = null
      state.regError = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.regStatus = 'loading'
      state.authError = null
    })
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.regStatus = 'resolved'
      state.user = action.payload
    })
    builder.addCase(authLogin.rejected, (state, action) => {
      state.regStatus = 'rejected'
      state.authError = action.error.message
    })
    builder.addCase(regUser.pending, (state, action) => {
      state.regStatus = 'loading'
      state.regError = null
    })
    builder.addCase(regUser.fulfilled, (state, action) => {
      state.regStatus = 'success'
      state.regError = null
    })
    builder.addCase(regUser.rejected, (state, action) => {
      state.regStatus = 'rejected'
      state.regError = action.error.message
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null
    })
  },
})

export const { clearErrors } = userSlice.actions
// export const {setUser} = userSlice.actions
export default userSlice.reducer
