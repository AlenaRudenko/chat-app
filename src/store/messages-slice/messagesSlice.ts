import { createSlice } from '@reduxjs/toolkit'
import { TMessage } from '../../interfaces/message'
import { getChannelMessages } from './thunk'
import { TChannel } from '../../interfaces/channel'

type Color = {
  color: string
} & TChannel

interface IState {
  messages: TMessage[] | null
  currentChannel: Color | null
}

const initialState = {
  messages: null,
  currentChannel: null,
} as IState

const messagesSlice = createSlice({
  name: 'messageReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChannelMessages.fulfilled, (state, action) => {
      ;(state.messages = action.payload.messages), (state.currentChannel = action.payload.channel)
    })
  },
})

export default messagesSlice.reducer
