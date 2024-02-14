import { Box, Button, TextField, Typography } from '@mui/material'
import { TProps } from './types'
import classes from './AuthForm.module.scss'
import { TInputEvent } from '../../interfaces/event'

export const AuthForm = ({
  submitButtonText,
  authChangeText,
  authChangeButtonText,
  onClickAuthBtnChange,
  onSubmit,
  value,
  onInputChange,
}: TProps) => {
  const handleChange = (event: TInputEvent) => {
    onInputChange(event.target.value)
  }
  const handleInputValid = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === ' ') {
      event.preventDefault()
    }
  }
  return (
    <Box className={classes.box}>
      <TextField
        color='secondary'
        label='NickName'
        margin='normal'
        value={value}
        variant='outlined'
        fullWidth
        onChange={handleChange}
        onKeyDown={handleInputValid}
      />
      <Button color='primary' disabled={value.length < 3} variant='contained' disableElevation onClick={onSubmit}>
        {submitButtonText}
      </Button>
      <Typography sx={{ textAlign: 'center' }}>
        {authChangeText}
        <Button variant='text' disableElevation onClick={onClickAuthBtnChange}>
          {authChangeButtonText}
        </Button>
      </Typography>
    </Box>
  )
}
