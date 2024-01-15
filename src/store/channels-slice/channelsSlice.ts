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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserChannels.fulfilled, (state, action) => {
      state.channels = action.payload
    })
  },
})

export default channelsSlice.reducer
