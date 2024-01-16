import { createSlice } from '@reduxjs/toolkit'
import { TChannel } from '../../interfaces/channel'
import { setUserChannels } from './thunk'

type TColor = {
  color: string
} & TChannel
type TState = {
  channels: TColor[] | null
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
