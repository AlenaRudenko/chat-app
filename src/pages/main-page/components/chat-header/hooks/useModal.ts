import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = useCallback(() => {
    return setIsOpen((prevState) => true)
  }, [])

  const handleCloseModal = useCallback(() => {
    return setIsOpen((prevState) => false)
  }, [])

  return { isOpen, handleCloseModal, handleOpenModal }
}
