import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../../services/Api.service'
import { ColoredChannel, TChannel } from '../../interfaces/channel'
import { store } from '../store'

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff)
  let color = '#' + hex.toString(16)

  return color
}

export const setUserChannels = createAsyncThunk<ColoredChannel[], void, { rejectValue: string }>(
  'channels/setUserChannels',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiService.getChannels()
      if (response.status !== 200) {
        return rejectWithValue('Server error')
      }
      const channels = response.data
      if (Array.isArray(channels) && !channels.length) {
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

export const createChannel = createAsyncThunk(
  'channels/createChannel',
  async ({ channelName }: { channelName: string }, { rejectWithValue }) => {
    try {
      const userId = store.getState().user.user.id
      const response = await ApiService.createChannel({ userId, channelName })
      if (response.status !== 201) {
        return rejectWithValue('Server create channel error')
      }
      const resChannels = await ApiService.getChannels()
      const channels = resChannels.data
      const result = channels.map((channel: TChannel) => {
        return { ...channel, color: randomColor() }
      })
      return result
    } catch (error) {
      rejectWithValue(error.message)
    }
  },
)
