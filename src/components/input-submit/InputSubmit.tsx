import { Button, Container, Link, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface IProps {
  buttonTitle: string
  handleSubmit: () => void
  inputValue: string
  handleInput: (event: string | undefined) => void
  handleForm: () => void
}

export const InputSubmitForm = ({
  buttonTitle = 'OK',
  handleForm,
  handleSubmit = () => {},
  inputValue = '',
  handleInput = () => {},
}: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event.target.value)
  }
  return (
    <Container
      sx={{
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <TextField
        label='NickName'
        margin='normal'
        value={inputValue}
        variant='outlined'
        fullWidth
        onChange={handleChange}
      />
      <Button color='primary' variant='contained' disableElevation onClick={handleSubmit}>
        {buttonTitle}
      </Button>
      <Typography>
        {buttonTitle === 'SIGN IN' ? (
          <Typography>
            No Account yet?
            <Button disableElevation variant='text' onClick={handleForm}>
              SIGN UP
            </Button>
          </Typography>
        ) : (
          <Typography>
            Already have an account?
            <Button disableElevation variant='text' onClick={handleForm}>
              SIGN IN
            </Button>
          </Typography>
        )}
      </Typography>
    </Container>
  )
}
