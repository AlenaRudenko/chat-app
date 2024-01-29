import { Box, Button, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createChannel } from '../../store/channels-slice/thunk'
import { AppDispatch, getUser } from '../../store/store'

type TProps = {
  isOpen: boolean
  handleCloseModal: () => void
}
export const ModalComponent = ({ isOpen, handleCloseModal }: TProps) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(createChannel({ channelName: value }))
    setValue((prevState) => '')
    handleCloseModal()
  }
  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>
        <TextField
          label='channelName'
          margin='normal'
          value={value}
          variant='outlined'
          fullWidth
          onChange={handleInputChange}
        />
        <Button variant='text' disableElevation onClick={handleSubmit}>
          Создать
        </Button>
      </Box>
    </Modal>
  )
}
