import { createSlice } from '@reduxjs/toolkit'
import { createChannel, setUserChannels } from './thunk'
import { TState } from './types'

const initialState = {
  channels: null,
  currentChannel: null,
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
    builder.addCase(setUserChannels.fulfilled, (state, action) => {
      state.channels = action.payload
    })
    builder.addCase(createChannel.fulfilled, (state, action) => {
      state.channels = action.payload
    })
  },
})
export const { clearChannels, setCurrentChannel } = channelsSlice.actions
export default channelsSlice.reducer
