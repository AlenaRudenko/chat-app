import { Stack, Chip, CircularProgress } from '@mui/material'
import { TProps } from './types'
import React from 'react'

export const StubComponent = ({ loading, messages, currentChannel }: TProps) => {
  return (
    <Stack sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      {messages == null && !currentChannel && <Chip color='default' label='Выберите канал,чтобы начать общение' />}
      {loading && currentChannel && <CircularProgress />}
      {messages !== null && !messages.length && !loading && <Chip color='default' label='Пока что тут пусто' />}
    </Stack>
  )
}
