import { TextField, styled } from '@mui/material'
import { ChatIProps } from './types'

const ChatInput = styled(TextField)(() => ({
  '& .MuiInput-underline::before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline::after': {
    borderBottom: 'none',
  },
}))

const ChatTextField = ({ isDisabled, value, handleChange }: ChatIProps) => {
  return (
    <ChatInput
      disabled={isDisabled}
      placeholder='Ответить...'
      value={value}
      variant='standard'
      fullWidth
      onChange={handleChange}
    />
  )
}
ChatTextField.displayName = 'ChatTextField'
export default ChatTextField
