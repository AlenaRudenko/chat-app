import { Box, styled } from '@mui/material'
import { type BoxProps as MuiBoxProps } from '@mui/material'
import { ReactElement } from 'react'
type HeaderBoxProps = {
  open?: boolean
} & MuiBoxProps

interface IProps extends React.PropsWithChildren {
  open: boolean
  children: ReactElement
}
const DrawerButton = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<HeaderBoxProps>(
  ({ theme, open }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    ...(open && {
      width: `300px`,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    ...(!open && {
      width: `50px`,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
  }),
)
const DrawerButtonBox = ({ open, children }: IProps) => {
  return <DrawerButton {...{ open }}>{children}</DrawerButton>
}
DrawerButtonBox.displayName = 'DrawerButtonBox'
export default DrawerButtonBox
