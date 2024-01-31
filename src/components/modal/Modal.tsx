import { Box, Button, TextField } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createChannel } from '../../store/channels-slice/thunk'
import { AppDispatch } from '../../store/store'

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
      sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={isOpen}
      onClose={handleCloseModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={{ width: '300px', height: '200px' }}>
        <TextField
          sx={{ color: 'primary' }}
          label='Название канала'
          margin='normal'
          value={value}
          variant='outlined'
          fullWidth
          onChange={handleInputChange}
          focused
        />
        <Button variant='text' disableElevation onClick={handleSubmit}>
          Создать
        </Button>
      </Box>
    </Modal>
  )
}
