import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../../../../store/store'
import { createChannel } from '../../../../../../../store/channels-slice/thunk'

export const useCreateChannel = () => {
  const [value, setValue] = useState('')

  const [isOpen, toggleIsOpen] = useState(false)

  const handleViewModal = useCallback(() => {
    toggleIsOpen((prevState) => !prevState)
  }, [])

  const dispatch = useDispatch<AppDispatch>()

  const handleSetValue = useCallback((value: string) => {
    setValue((prevState) => value)
  }, [])

  const handleSubmit = () => {
    handleViewModal()
    dispatch(createChannel({ channelName: value }))
    setValue('')
  }
  return { value, handleSetValue, handleSubmit, isOpen, handleViewModal }
}
