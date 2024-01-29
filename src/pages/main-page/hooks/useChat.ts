import { useEffect, useRef, useState } from 'react'
import { SERVER_URI } from '../../../constants/serverUri'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux'
import { getCurrentChannel, getUser } from '../../../store/store'

export const useChat = () => {
  const user = useSelector(getUser)
  const currentChannel = useSelector(getCurrentChannel)
  const { current: socket } = useRef(io(SERVER_URI))
  const [messages, setMessages] = useState([])
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connect successful !')
    })
  }, [])
  useEffect(() => {
    socket.on('receive_message', (response) => {
      return Array.isArray(response) ? setMessages(response) : setMessages((prevState) => [...prevState, response])
    })
  }, [])

  const handleJoinChannel = (channelId: string) => {
    setMessages((prevState) => [])
    socket.emit('join_channel', { userId: user.id, channelId })
  }
  const handleSendMessage = (value: string) => {
    return socket.emit('send_message', {
      userId: user.id,
      channelId: currentChannel.id,
      message: value,
    })
  }
  const handleLeaveChannel = () => {
    console.log('leave', currentChannel)
    return socket.emit('leave_channel', {
      channelId: currentChannel.id,
    })
  }
  return { user, currentChannel, messages, handleJoinChannel, handleSendMessage, handleLeaveChannel }
}
