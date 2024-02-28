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
export type AppDispatch = typeof store.dispatch

export const getUser = (state: RootState) => state.user.user
export const getUserError = (state: RootState) => state.user.error
export const getChannels = (state: RootState) => state.channels.channels
export const getChannelError = (state: RootState) => state.channels.channelError
export const getCurrentChannel = (state: RootState) => state.channels.currentChannel
