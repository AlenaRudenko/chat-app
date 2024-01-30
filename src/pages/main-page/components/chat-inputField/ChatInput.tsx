import { Toolbar, useTheme, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MyAppBar from './styles/MyAppBar'
import ChatTextField from './styles/ChatTextField'
import { useState } from 'react'


type IProps = {
  handleSendMessage: (value: string) => void
}
export const ChatInput = ({ handleSendMessage }: IProps) => {
  const [value, setValue] = useState('')

  const theme = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleSend = () => {
    handleSendMessage(value)
    setValue((prevState) => '')
  }


  return (

     <MyAppBar>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: theme.palette.background.paper,
        }}
      >
        <ChatTextField {...{ value, handleChange }} />
      
        <IconButton disabled={value.length < 3}>
          <SendIcon onClick={handleSend} />
        </IconButton>
      </Toolbar>
    </MyAppBar> 

   
  )
}
