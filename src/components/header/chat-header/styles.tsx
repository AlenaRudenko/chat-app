import { Box, IconButton, styled } from '@mui/material'
import { type BoxProps as MuiBoxProps } from '@mui/material'
import { ReactElement } from 'react'
import { useDrawer } from '../../../pages/main-page/store/drawerContext'
import MenuIcon from '@mui/icons-material/Menu'

type HeaderBoxProps = {
  open?: boolean
} & MuiBoxProps

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
const DrawerButtonBox = () => {
  const { isDrawerOpen, handleIsDrawerOpen } = useDrawer()
  return (
    <DrawerButton open={isDrawerOpen}>
      <IconButton aria-label='open drawer' color='inherit' edge='start' sx={{ mr: 2 }} onClick={handleIsDrawerOpen}>
        <MenuIcon />
      </IconButton>
    </DrawerButton>
  )
}
DrawerButtonBox.displayName = 'DrawerButtonBox'
export default DrawerButtonBox
