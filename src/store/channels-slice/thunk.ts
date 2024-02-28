import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../../services/Api.service'
import { ColoredChannel, TChannel } from '../../interfaces/channel'
import { store } from '../store'
import { randomColor } from '../../methods/randomColor'

export const setUserChannels = createAsyncThunk<ColoredChannel[], void, { rejectValue: string }>(
  'channels/setUserChannels',
  async (_, { rejectWithValue }) => {
    try {
      const channels = (await ApiService.getChannels()).data

      if (Array.isArray(channels) && !channels.length) {
        return rejectWithValue('No channels')
      }
      const result = channels.map((channel: TChannel) => {
        return { ...channel, color: randomColor() }
      })
      return result
    } catch (error) {
      return rejectWithValue('Server for getting channels error')
    }
  },
)

export const createChannel = createAsyncThunk<ColoredChannel[], { channelName: string }, { rejectValue: string }>(
  'channels/createChannel',
  async ({ channelName }, { rejectWithValue }) => {
    try {
      const userId = store.getState().user.user.id
      const response = await ApiService.createChannel({ userId, channelName })
      if (response.status !== 201) {
        return rejectWithValue('Server create channel error')
      }
      const channels = (await ApiService.getChannels()).data
      const result = channels.map((channel: TChannel) => {
        return { ...channel, color: randomColor() }
      })
      return result
    } catch (error) {
      rejectWithValue('Server create channel error')
    }
  },
)
