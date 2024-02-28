import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createChannel, setUserChannels } from './thunk'
import { TState } from './types'
import { ColoredChannel } from '../../interfaces/channel'

const initialState = {
  channels: null,
  currentChannel: null,
  channelError: null,
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
      .addCase(setUserChannels.fulfilled, (state, action: PayloadAction<ColoredChannel[]>) => {
        state.channelError = null
        state.channels = action.payload
      })
      .addCase(setUserChannels.rejected, (state, action: PayloadAction<string>) => {
        state.channelError = action.payload
      })
      .addCase(createChannel.fulfilled, (state, action: PayloadAction<ColoredChannel[]>) => {
        state.channelError = null
        state.channels = action.payload
      })
      .addCase(createChannel.rejected, (state, action: PayloadAction<string>) => {
        state.channelError = action.payload
      })
  },
})
export const { clearChannels, setCurrentChannel } = channelsSlice.actions
export default channelsSlice.reducer
