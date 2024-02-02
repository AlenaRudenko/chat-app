import { Box, Button, TextField, useTheme } from '@mui/material'
import Modal from '@mui/material/Modal'
import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createChannel } from '../../store/channels-slice/thunk'
import { AppDispatch } from '../../store/store'

type TProps = {
  isOpen: boolean
  handleCloseModal: () => void
}

export const ModalComponent = memo(({ isOpen, handleCloseModal }: TProps) => {
  const [value, setValue] = useState('')
  const theme = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  console.log('modal rerender')
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
      <Box
        sx={{
          gap: 1,
          width: '300px',
          height: '200px',
          borderRadius: '5.59px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <TextField
          color='success'
          label='Название канала'
          margin='dense'
          value={value}
          variant='outlined'
          onChange={handleInputChange}
        />
        <Button disabled={value.length <= 1} variant='contained' disableElevation onClick={handleSubmit}>
          Создать
        </Button>
      </Box>
    </Modal>
  )
})
