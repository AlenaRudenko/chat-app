import { TextField, styled } from '@mui/material'

const ChatInput = styled(TextField)(({ theme }) => ({
  '& .MuiInput-underline::before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline::after': {
    borderBottom: 'none',
  },
}))

const ChatTextField = () => {
  return <ChatInput placeholder='Ответить...' variant='standard' fullWidth />
}
ChatTextField.displayName = 'ChatTextField'
export default ChatTextField
