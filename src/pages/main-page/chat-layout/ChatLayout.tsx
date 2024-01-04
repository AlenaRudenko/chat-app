import { Box } from '@mui/material'
import { memo } from 'react'
import { dummyData } from './constants'
import { UserProfile } from '../user-profile/UserProfile'

const ChatLayout = memo(() => {
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
      {dummyData.map((user, i = 0) => {
        const reverse = user.id === 1 ? 'row-reverse' : 'row'
        const randomKey = Math.random().toString(36).slice(2, 7)
        return (
          <div key={randomKey}>
            <UserProfile {...{ user, reverse }} />
          </div>
        )
      })}
    </Box>
  )
})

ChatLayout.displayName = 'ChatLayout'
export default ChatLayout
