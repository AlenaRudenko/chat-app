import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getUser, store } from '../../../store/store'
import { ColoredChannel } from '../../../interfaces/channel'
import { SocketApiServise } from '../../../services/SocketApi.service'
import { TMessage } from '../../../interfaces/message'
import { setCurrentChannel } from '../../../store/channels-slice/channelsSlice'

export const useChannel = () => {
  const user = useSelector(getUser)
  const handleSetChannel = useCallback((channel: ColoredChannel) => {
    SocketApiServise.joinChannel({ userId: user.id, channelId: channel.id })
    store.dispatch(setCurrentChannel(channel))
  }, [])

  return { handleSetChannel }
}
