import { UserProfile } from './components/user-profile/UserProfile'
import { TProps } from './types'
import { randomKey } from '../../../../methods/randomKey'
import { useScroll } from './hooks/useScroll'
import { memo } from 'react'
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const ChatLayout = memo(({ user, messages }: TProps) => {
  const { scrollRef } = useScroll(messages)

  return (
    <>
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
        <IconButton sx={{width:'50px',bgcolor:'red', position:'absolute', bottom:'66px', right:'30px'}}>
          <ArrowDownwardIcon />
        </IconButton>
      <div ref={scrollRef} />
    </>
  )
})
