import { Button, Container, TextField, Typography } from '@mui/material'
import { TProps } from './types'

export const AuthForm = ({
  submitButtonText,
  authChangeText,
  authChangeButtonText,
  onClickAuthBtnChange,
  onSubmit,
  value,
  onInputChange,
}: TProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value)
  }
  return (
    <Container
      sx={{
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <TextField label='NickName' margin='normal' value={value} variant='outlined' fullWidth onChange={handleChange} />
      <Button color='primary' variant='contained' disableElevation onClick={onSubmit}>
        {submitButtonText}
      </Button>
      <Typography>
        <Typography sx={{ textAlign: 'center' }}>
          {authChangeText}
          <Button variant='text' disableElevation onClick={onClickAuthBtnChange}>
            {authChangeButtonText}
          </Button>
        </Typography>
      </Typography>
    </Container>
  )
}
