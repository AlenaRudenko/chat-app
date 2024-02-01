import { useEffect, useRef, useState } from 'react'
import { SERVER_URI } from '../../../constants/serverUri'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getCurrentChannel, getUser } from '../../../store/store'
import { ColoredChannel } from '../../../interfaces/channel'
import { setCurrentChannel } from '../../../store/channels-slice/channelsSlice'

export const useChat = () => {
  const [messages, setMessages] = useState([])

  const user = useSelector(getUser)
  const currentChannel = useSelector(getCurrentChannel)

 const  socket = io(SERVER_URI)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connect successful !')
    })
  }, [])

  useEffect(() => {
    socket.on('receive_message', (response) => {
      return Array.isArray(response) ? setMessages(response) : setMessages((prevState) => [...prevState, response])
    })
  })

  const handleJoinChannel = (channel: ColoredChannel) => {
    if (!currentChannel) {
      console.log('firts join', channel)
      socket.emit('join_channel', { userId: user.id, channelId: channel.id })
      dispatch(setCurrentChannel(channel))
    } else if (currentChannel) {
      console.log('no curcha', channel, 'curcha', currentChannel)
      if (currentChannel.id !== channel.id) {
        setMessages((prevState) => [])
        socket.emit('leave_channel', {
          channelId: currentChannel.id,
        })
        socket.emit('join_channel', { userId: user.id, channelId: channel.id })
        dispatch(setCurrentChannel(channel))
      }
    }
  }

  const handleSendMessage = (value: string) => {
    console.log(user, currentChannel,value)
    return socket.emit('send_message', {
      userId: user.id,
      channelId: currentChannel.id,
      message: value,
    })
  }
  const handleLogOut = () => {
    console.log('trying disconnecting')
    if (currentChannel) {
      socket.emit('leave_channel', {
        channelId: currentChannel.id,
      })
    }
    socket.disconnect()
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  }
  return { user, currentChannel, messages, handleJoinChannel, handleSendMessage, handleLogOut }
}
