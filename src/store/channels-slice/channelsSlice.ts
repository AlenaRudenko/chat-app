import { createSlice } from '@reduxjs/toolkit'
import { ColoredChannel, TChannel } from '../../interfaces/channel'
import { createChannel, setUserChannels } from './thunk'

type TState = {
  channels: ColoredChannel[] | null
  currentChannel: ColoredChannel | null
}

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
    builder.addCase(setUserChannels.pending, (state, action) => {
      state.channels = action.payload
    })
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
