import { Box } from '@mui/material'
import { memo, useEffect } from 'react'
import { dummyData } from './constants'
import { UserProfile } from '../user-profile/UserProfile'
import { useSelector } from 'react-redux'
import { getMessages, getUser } from '../../../store/store'

export const ChatLayout = () => {
  const messages = useSelector(getMessages)
  const user = useSelector(getUser)
  useEffect(() => {
    console.log(messages)
  }, [messages])
  return (
    <Box
      sx={{
        maxHeight: `calc(100vh - 128px)`,
        overflow: 'auto',
        margin: '64px 0px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {messages &&
        messages.map((message, i = 0) => {
          const reverse = message.userId === user.id ? 'row-reverse' : 'row'
          const randomKey = Math.random().toString(36).slice(2, 7)
          return (
            <div key={randomKey}>
              <UserProfile {...{ message, reverse }} />
            </div>
          )
        })}
    </Box>
  )
}
