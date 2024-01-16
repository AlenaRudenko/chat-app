import { createSlice } from '@reduxjs/toolkit'
import { TMessage } from '../../interfaces/message'
import { getChannelMessages } from './thunk'
import { TChannel } from '../../interfaces/channel'
import { logoutUser } from '../user-slice/thunk'

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
  reducers: {
    clearMessages: (state) => {
      state.messages = null
      state.currentChannel = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChannelMessages.fulfilled, (state, action) => {
      ;(state.messages = action.payload.messages), (state.currentChannel = action.payload.channel)
    })
  },
})
export const { clearMessages } = messagesSlice.actions
export default messagesSlice.reducer
