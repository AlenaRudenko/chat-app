import { Box, styled } from '@mui/material'
import { TProps } from './types'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  background: theme.palette.background.default,
}))

export const StyledChatBox = ({ children }: TProps) => {
  return (
    <StyledBox>
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
        {children}
      </Box>
    </StyledBox>
  )
}
StyledChatBox.displayName = 'StyledChatBox'
export default StyledChatBox
