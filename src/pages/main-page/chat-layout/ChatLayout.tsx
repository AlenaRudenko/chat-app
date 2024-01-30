import { Box, Chip, Stack } from '@mui/material'
import { UserProfile } from '../user-profile/UserProfile'
import IUser from '../../../interfaces/User'
import { TMessage } from '../../../interfaces/message'
import { useEffect, useRef } from 'react'

interface IProps {
  user: IUser
  messages: TMessage[]
}
export const ChatLayout = ({ user, messages }: IProps) => {
  const scrollRef = useRef(null)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
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
        <div ref={scrollRef}/>
      {!messages.length && (
        <Stack sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
          <Chip color='info' label='Пока что тут пусто' />
        </Stack>
      )}
    </Box>
  )
}
