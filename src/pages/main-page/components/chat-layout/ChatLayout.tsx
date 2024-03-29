import { UserProfile } from './components/user-profile/UserProfile'
import { TProps } from './types'
import { useScroll } from './hooks/useScroll'


export const ChatLayout = ({ user, messages }: TProps) => {
  const { scrollRef } = useScroll(messages)

  return (
    <>
      {messages &&
        user &&
        messages.map((message) => {
          const reverse = message.userId === user.id ? 'row-reverse' : 'row'
          return (
            <div key={message.id}>
              <UserProfile {...{ message, reverse }} />
            </div>
          )
        })}
      <div ref={scrollRef} />
    </>
  )
}
