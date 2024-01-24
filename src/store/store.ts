import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user-slice/userSlice'
import channelsSlice from './channels-slice/channelsSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    channels: channelsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const getUser = (state: RootState) => state.user.user
export const getAuthError = (state: RootState) => state.user.authError
export const getRegError = (state: RootState) => state.user.regError
export const getChannels = (state: RootState) => state.channels.channels
export const getCurrentChannel = (state: RootState) => state.channels.currentChannel
