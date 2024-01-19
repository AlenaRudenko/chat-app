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
