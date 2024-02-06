import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createChannel, setUserChannels } from './thunk'
import { TState } from './types'
import { isErrorFn } from '../errorFn'

const initialState = {
  channels: null,
  currentChannel: null,
  error: null,
} as TState

const channelsSlice = createSlice({
  name: 'channelReducer',
  initialState,
  reducers: {
    clearChannels: (state) => {
      state.channels = null
      state.currentChannel = null
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUserChannels.fulfilled, (state, action) => {
        state.channels = action.payload
      })
      .addCase(createChannel.fulfilled, (state, action) => {
        state.channels = action.payload
      })
      .addMatcher(isErrorFn, (state, action: PayloadAction<string>) => {
        state.error = action.payload
      })
  },
})
export const { clearChannels, setCurrentChannel } = channelsSlice.actions
export default channelsSlice.reducer
