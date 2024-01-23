import { Box } from '@mui/material'
import { memo, useEffect } from 'react'
import { UserProfile } from '../user-profile/UserProfile'
import { useSelector } from 'react-redux'
import { getMessages, getUser } from '../../../store/store'
import { SocketApiServise } from '../../../services/SocketApi.service'

export const ChatLayout = memo(() => {
  const messages = useSelector(getMessages)
  const user = useSelector(getUser)
  useEffect(() => {
    SocketApiServise.receiveMessages()
  }, [])
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
        user &&
        messages.map((message) => {
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
})
