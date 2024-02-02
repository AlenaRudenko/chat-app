import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getCurrentChannel, getUser } from '../../../store/store'
import { ColoredChannel } from '../../../interfaces/channel'
import { setCurrentChannel } from '../../../store/channels-slice/channelsSlice'
import { SocketService } from '../../../services/Socket.service'

export const useChat = () => {
  const [messages, setMessages] = useState([])

  const user = useSelector(getUser)
  const currentChannel = useSelector(getCurrentChannel)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    SocketService.createConnection()
  }, [])

  useEffect(() => {
    SocketService.socket.on('receive_message', (response) => {
      if (Array.isArray(response)) {
        setMessages(response)
      } else setMessages((prevState) => [...prevState, response])
      console.log('end', messages)
    })
  }, [])

  const handleJoinChannel = (channel: ColoredChannel) => {
    if (!currentChannel) {
      console.log('firts join', channel)
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
  }

  const handleSendMessage = (value: string) => {
    console.log(user, currentChannel, value)
    return SocketService.handleSendMessage({
      userId: user.id,
      channelId: currentChannel.id,
      message: value,
    })
  }
  const handleLogOut = () => {
    if (currentChannel) {
      SocketService.handleLeaveChannel(currentChannel.id)
    }
    SocketService.handleLogOut()
  }
  return { user, currentChannel, messages, handleJoinChannel, handleSendMessage, handleLogOut }
}
