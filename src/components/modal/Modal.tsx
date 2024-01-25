import { Box, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useState } from 'react'

type TProps = {
  isOpen: boolean
  handleModalClose: () => void
  modalText: string
}
export const ModalComponent = ({ isOpen, handleModalClose, modalText }: TProps) => {
  const [value, setValue] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <Modal
      open={isOpen}
      onClose={handleModalClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Введите название нового канала:
        </Typography>
        <TextField
          label='channelName'
          margin='normal'
          value={value}
          variant='outlined'
          fullWidth
          onChange={handleInputChange}
        />
      </Box>
    </Modal>
  )
}
