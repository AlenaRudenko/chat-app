import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getChannelMessages } from '../../../store/messages-slice/thunk'
import { AppDispatch } from '../../../store/store'
import { ColoredChannel } from '../../../interfaces/channel'

export const useChannel = () => {
  const [currentChannel, setCurrentChannel] = useState(null)
  const dispatch = useDispatch<AppDispatch>()
  const handleSetChannel = (channel: ColoredChannel) => {
    dispatch(getChannelMessages(channel))
  }
  return { handleSetChannel }
}
