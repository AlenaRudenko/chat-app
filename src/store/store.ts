import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user-slice/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const getAuthError = (state: RootState) => state.user.authError
export const getRegError = (state: RootState) => state.user.regError
