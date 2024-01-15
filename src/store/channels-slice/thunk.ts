import { createAsyncThunk } from '@reduxjs/toolkit'
import { TChannel } from '../../interfaces/channel'
import { ApiService } from '../../services/Api.service'

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff)
  let color = '#' + hex.toString(16)

  return color
}
type TColor = {
  color: string
} & TChannel
export const setUserChannels = createAsyncThunk<TColor[], string, { rejectValue: string }>(
  'channels/setUserChannels',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await ApiService.getChannels()
      if (response.statusText !== 'OK') {
        return rejectWithValue('Server error')
      }
      const idUser = userId
      const channels = response.data.channels
      if (!channels) {
        return rejectWithValue('No channels')
      }
      const result = channels.map((channel: TChannel) => {
        return { ...channel, color: randomColor() }
      })
      return result
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
