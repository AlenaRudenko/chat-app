import { Avatar, Container, Typography } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { IProps } from './types'
import { Bubble } from './styles'
import { memo } from 'react'

export const UserProfile = memo(({ message, reverse }: IProps) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ padding: '0px 20px', height: '100%', display: 'flex', flexDirection: reverse, alignItems: 'center' }}
        disableGutters
      >
        {reverse === 'row' && (
          <Avatar sx={{ backgroundColor: 'white' }}>
            <SentimentSatisfiedAltIcon color='primary' />
          </Avatar>
        )}
        <Bubble>
          <Typography sx={{ whiteSpace: 'pre-wrap', display: 'inline' }}>{message.message}</Typography>
        </Bubble>
      </Container>
      <div />
    </>
  )
})
