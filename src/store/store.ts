import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user-slice/userSlice'
import channelsSlice from './channels-slice/channelsSlice'
import messagesSlice from './messages-slice/messagesSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    channels: channelsSlice,
    messages: messagesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const getUser = (state: RootState) => state.user.user
export const getAuthError = (state: RootState) => state.user.authError
export const getRegError = (state: RootState) => state.user.regError
export const getChannels = (state: RootState) => state.channels.channels
export const getMessages = (state: RootState) => state.messages.messages
export const getCurrentChannel = (state: RootState) => state.messages.currentChannel
