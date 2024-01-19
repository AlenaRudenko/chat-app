import { createSlice } from '@reduxjs/toolkit'
import { ColoredChannel, TChannel } from '../../interfaces/channel'
import { setUserChannels } from './thunk'

type TState = {
  channels: ColoredChannel[] | null
}

const initialState = {
  channels: null,
} as TState

const channelsSlice = createSlice({
  name: 'channelReducer',
  initialState,
  reducers: {
    clearChannels: (state) => {
      state.channels = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserChannels.fulfilled, (state, action) => {
      state.channels = action.payload
    })
  },
})
export const { clearChannels } = channelsSlice.actions
export default channelsSlice.reducer
