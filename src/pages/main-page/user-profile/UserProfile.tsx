import { Avatar, Container, Typography } from '@mui/material'
import { IProps } from './types'
import { Bubble } from './styles'

export const UserProfile = ({ message, reverse }: IProps) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ padding: '0px 20px', height: '100%', display: 'flex', flexDirection: reverse, alignItems: 'center' }}
        disableGutters
      >
        <Avatar>A</Avatar>
        <Bubble>
          <Typography sx={{ whiteSpace: 'pre-wrap', display: 'inline' }}>{message.message}</Typography>
        </Bubble>
      </Container>
      <div />
    </>
  )
}
