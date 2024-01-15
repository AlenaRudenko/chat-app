import { createAsyncThunk } from '@reduxjs/toolkit'
import { TMessage } from '../../interfaces/message'
import { ApiService } from '../../services/Api.service'
import { TChannel } from '../../interfaces/channel'
type Color = {
  color: string
}
type TProps = TChannel & Color

export const getChannelMessages = createAsyncThunk<
  { messages: TMessage[]; channel: TProps },
  TProps,
  { rejectValue: string }
>('messages/getMessages', async (channel, { rejectWithValue }) => {
  try {
    const response = await ApiService.getMessages()
    if (response.statusText !== 'OK') {
      rejectWithValue('Server error')
    }
    const messages = response.data.messages.filter((message) => message.channelId === channel.id)
    if (messages) {
      return { messages, channel }
    }
  } catch (error) {
    rejectWithValue(error.message)
  }
})
