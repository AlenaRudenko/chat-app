import { Box, styled } from '@mui/material'
import { IChildrenProp } from '../../../interfaces/childrenProp'

export const StyledBox = ({ children }: IChildrenProp) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    visibility: 'hidden',
    opacity: 0,
    height: '40px',
    transition: 'opacity 600ms, visibility 600ms',

    [theme.breakpoints.down('md')]: {
      visibility: 'visible',
      opacity: 1,
    },
  }))
  return <StyledBox>{children}</StyledBox>
}
