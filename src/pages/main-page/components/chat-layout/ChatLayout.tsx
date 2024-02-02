import { Box } from '@mui/material'
import { UserProfile } from './components/user-profile/UserProfile'
import IUser from '../../../../interfaces/User'
import { TMessage } from '../../../../interfaces/message'
import { useEffect, useRef } from 'react'
import { ColoredChannel } from '../../../../interfaces/channel'
import { StubComponent } from './components/chat-stub/Stub'
import { TProps } from './types'

export const ChatLayout = ({ user, messages, currentChannel, loading }: TProps) => {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: 'smooth' })
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
      <StubComponent {...{ messages, currentChannel, loading }} />
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
      <div ref={scrollRef} />
    </Box>
  )
}
