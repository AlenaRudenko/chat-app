import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Channel } from '../../interfaces/channel'

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff)
  let color = '#' + hex.toString(16)

  return color
}

export const channelSlice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    setChannels: {
      reducer: (state, action: PayloadAction<Channel[]>) => {
        state.push(action.payload)
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            color: randomColor(),
          },
        }
      },
    },
  },
})
