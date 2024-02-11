import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannelError, getCurrentChannel, getUser, getUserError } from '../../../store/store'
import { ColoredChannel } from '../../../interfaces/channel'
import { setCurrentChannel } from '../../../store/channels-slice/channelsSlice'
import { SocketService } from '../../../services/Socket.service'
import { useSnackbar } from 'notistack'
import { TState } from './types'

export const useChat = () => {
  const [messages, setMessages] = useState<TState['messages']>(null)
  const [loading, setLoading] = useState<TState['loading']>(false)

  const user = useSelector(getUser)
  const currentChannel = useSelector(getCurrentChannel)
  const error = useSelector(getChannelError)
  const usererror = useSelector(getUserError)
  console.log('hook rerender', messages, loading, user, currentChannel, error)
  const dispatch = useDispatch<AppDispatch>()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    SocketService.createConnection()

    SocketService.receiveMessages((response) => {
      setLoading(false)
      if (Array.isArray(response)) {
        setMessages(response)
      } else setMessages((prevState) => [...prevState, response])
    })
  }, [])

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'info' })
    }
    if (usererror) {
      enqueueSnackbar(usererror, { variant: 'error' })
    }
  }, [enqueueSnackbar, error, usererror])

  const handleJoinChannel = useCallback(
    (channel: ColoredChannel) => {
      setLoading((prevState) => true)
      if (!currentChannel) {
        SocketService.handleJoinChannel({ userId: user.id, channelId: channel.id })
        dispatch(setCurrentChannel(channel))
      } else if (currentChannel) {
        if (currentChannel.id !== channel.id) {
          setMessages((prevState) => [])
          SocketService.handleLeaveChannel(currentChannel.id)
          SocketService.handleJoinChannel({ userId: user.id, channelId: channel.id })
          dispatch(setCurrentChannel(channel))
        }
      }
    },
    [currentChannel, dispatch, user],
  )

  const handleSendMessage = useCallback(
    (value: string) => {
      SocketService.handleSendMessage({
        userId: user.id,
        channelId: currentChannel.id,
        message: value,
      })
    },
    [user, currentChannel],
  )

  const handleLogOut = useCallback(() => {
    if (currentChannel) {
      SocketService.handleLeaveChannel(currentChannel.id)
    }
    SocketService.handleLogOut()
  }, [currentChannel])

  return { loading, user, currentChannel, messages, handleJoinChannel, handleSendMessage, handleLogOut }
}
