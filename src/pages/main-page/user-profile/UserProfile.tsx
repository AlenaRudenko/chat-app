import { Avatar, Container, Typography } from '@mui/material'
import Bubble from '../chat-layout/styles'
import { IProps } from './types'

export const UserProfile = ({ user, reverse }: IProps) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ padding: '0px 20px', height: '100%', display: 'flex', flexDirection: reverse, alignItems: 'center' }}
        disableGutters
      >
        <Avatar>A</Avatar>
        <Bubble>
          <Typography sx={{ whiteSpace: 'pre-wrap', display: 'inline' }}>{user.message}</Typography>
        </Bubble>
      </Container>
      <div />
    </>
  )
}
