import { useTheme } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TInputEvent } from '../../../../../interfaces/event'
import { getCurrentChannel } from '../../../../../store/store'
import { IProps } from '../types'

export const useChatInput = ({ handleSendMessage }: IProps) => {
  const [value, setValue] = useState('')

  const currentChannel = useSelector(getCurrentChannel)
  const isDisabled = !currentChannel

  const theme = useTheme()

  const handleChange = (e: TInputEvent) => {
    setValue(e.target.value)
  }

  const handleSend = () => {
    handleSendMessage(value)
    setValue((prevState) => '')
  }
  return { value, isDisabled, theme, handleChange, handleSend }
}
