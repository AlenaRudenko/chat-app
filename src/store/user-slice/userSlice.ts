import { createSlice } from '@reduxjs/toolkit'
import { authLogin } from './thunk'
import { TState } from './types'

const initialState = {
  user: {},
  status: null,
  error: null,
} as TState

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.status = 'resolved'
      state.user = action.payload
    })
    builder.addCase(authLogin.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.error.message
    })
  },
})
// export const {setUser} = userSlice.actions
export default userSlice.reducer
