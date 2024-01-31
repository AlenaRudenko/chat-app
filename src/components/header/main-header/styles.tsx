import { Box, styled } from '@mui/material'
import { ReactElement } from 'react'

interface IProps extends React.PropsWithChildren {
  children: ReactElement
}

export const StyledBox = ({ children }: IProps) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 600ms, visibility 600ms',

    [theme.breakpoints.down('md')]: {
      visibility: 'visible',
      opacity: 1,
    },
  }))
  return <StyledBox>{children}</StyledBox>
}
