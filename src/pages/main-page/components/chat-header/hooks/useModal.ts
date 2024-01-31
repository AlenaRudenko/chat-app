import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    return setIsOpen((prevState) => true)
  }
  const handleCloseModal = () => {
    return setIsOpen((prevState) => false)
  }
  return { isOpen, handleCloseModal, handleOpenModal }
}
