import { TextField, styled } from '@mui/material'

const ChatInput = styled(TextField)(({ theme }) => ({
  '& .MuiInput-underline::before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline::after': {
    borderBottom: 'none',
  },
}))
interface IProps {
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ChatTextField = ({ value, handleChange }: IProps) => {
  return <ChatInput placeholder='Ответить...' value={value} variant='standard' fullWidth onChange={handleChange} />
}
ChatTextField.displayName = 'ChatTextField'
export default ChatTextField
