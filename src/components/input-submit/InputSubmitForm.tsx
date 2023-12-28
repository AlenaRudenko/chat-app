import { Button, Container, TextField, Typography, useTheme } from '@mui/material'
import { TEvent } from 'src/interfaces/event'

type IProps = {
  buttonTitle: string
  handleSubmit: () => void
  inputValue: string
  handleInput: (value:string) => void
  handleForm: () => void
}

export const InputSubmitForm = ({
  buttonTitle = 'OK',
  handleForm,
  handleSubmit,
  inputValue,
  handleInput,
}: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event.target.value)
  }
  const theme = useTheme()
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
          <Typography sx={{ textAlign: 'center' }}>
            No Account yet?
            <Button color='primary' variant='text' disableElevation onClick={handleForm}>
              SIGN UP
            </Button>
          </Typography>
        ) : (
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?
            <Button variant='text' disableElevation onClick={handleForm}>
              SIGN IN
            </Button>
          </Typography>
        )}
      </Typography>
    </Container>
  )
}
