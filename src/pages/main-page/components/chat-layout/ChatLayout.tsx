import { Box } from '@mui/material'
import { UserProfile } from './components/user-profile/UserProfile'
import { TProps } from './types'
import { StubComponent } from './components/chat-stub/StubComponent'
import { randomKey } from '../../../../methods/randomKey'
import { useScroll } from './hooks/useScroll'

export const ChatLayout = ({ user, messages, currentChannel, loading }: TProps) => {
  const { scrollRef } = useScroll(messages)

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
          const messageKey = randomKey()
          return (
            <div key={messageKey}>
              <UserProfile {...{ message, reverse }} />
            </div>
          )
        })}
      <div ref={scrollRef} />
    </Box>
  )
}
