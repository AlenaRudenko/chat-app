import { Box, Button, TextField, useTheme } from '@mui/material'
import Modal from '@mui/material/Modal'
import classes from './Modal.module.scss'
import { TProps } from './types'

export const ModalComponent = ({ value, handleSetValue, handleSubmit, isOpen, handleViewModal }: TProps) => {
  const theme = useTheme()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSetValue(e.target.value)
  }

  return (
    <Modal
      aria-describedby='modal-modal-description'
      aria-labelledby='modal-modal-title'
      className={classes.modal}
      open={isOpen}
      onClose={handleViewModal}
    >
      <Box
        className={classes.box}
        sx={{
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
}