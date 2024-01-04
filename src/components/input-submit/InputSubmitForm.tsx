import { Button, Container, TextField, Typography } from '@mui/material'
import { TProps } from './types'

export const InputSubmitForm = ({ authType, handleOnClickBtnSing, handleSubmit, value, handleInput }: TProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event.target.value)
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
      <Button color='primary' variant='contained' disableElevation onClick={handleSubmit}>
        {authType === 'signin' ? 'SIGN IN' : 'SIGN UP'}
      </Button>
      <Typography>
        {authType === 'signin' ? (
          <Typography sx={{ textAlign: 'center' }}>
            No Account yet?
            <Button color='primary' variant='text' disableElevation onClick={handleOnClickBtnSing}>
              SIGN UP
            </Button>
          </Typography>
        ) : (
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?
            <Button variant='text' disableElevation onClick={handleOnClickBtnSing}>
              SIGN IN
            </Button>
          </Typography>
        )}
      </Typography>
    </Container>
  )
}
