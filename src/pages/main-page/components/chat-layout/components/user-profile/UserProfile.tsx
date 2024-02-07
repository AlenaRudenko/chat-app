import classes from './UserProfile.module.scss'
import { Avatar, Box, Typography } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { IProps } from './types'
import { Bubble } from './styles'
import { memo } from 'react'

export const UserProfile = memo(({ message, reverse }: IProps) => {
  return (
    <Box className={classes.box} sx={{ flexDirection: reverse }}>
      {reverse === 'row' && (
        <Avatar sx={{ backgroundColor: 'white' }}>
          <SentimentSatisfiedAltIcon color='primary' />
        </Avatar>
      )}
      <Bubble>
        <Typography sx={{ whiteSpace: 'pre-wrap', display: 'inline' }}>{message.message}</Typography>
      </Bubble>
    </Box>
  )
})
