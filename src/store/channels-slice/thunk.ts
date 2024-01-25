import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../../services/Api.service'
import { ColoredChannel, TChannel } from '../../interfaces/channel'

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff)
  let color = '#' + hex.toString(16)

  return color
}

export const setUserChannels = createAsyncThunk<ColoredChannel[], string, { rejectValue: string }>(
  'channels/setUserChannels',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await ApiService.getUserChannels(userId)
      if (response.status !== 200) {
        return rejectWithValue('Server error')
      }
      const channels = response.data
      console.log('channels', channels)
      if (Array.isArray(channels) && !channels.length) {
        console.log('no channels')
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
