import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelMessages } from '../../../store/messages-slice/thunk'
import { AppDispatch, getUser } from '../../../store/store'
import { ColoredChannel } from '../../../interfaces/channel'
import { SocketApiServise } from '../../../services/SocketApi.service'
import { TMessage } from '../../../interfaces/message'

export const useChannel = () => {
  const user = useSelector(getUser)
  const handleSetChannel = useCallback((channel: ColoredChannel) => {
    SocketApiServise.joinChannel({ userId: user.id, channelName: channel.channelName })
  }, [])

  return { handleSetChannel }
}
