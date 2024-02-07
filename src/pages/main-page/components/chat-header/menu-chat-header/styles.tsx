import { Menu } from '@mui/material'
import { TMenuProps } from './types'

export const MenuComponent = ({ children, anchorEl, isMenuOpen, handleMenu }: TMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      aria-labelledby='menu'
      id='menu'
      open={isMenuOpen}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleMenu}
    >
      {children}
    </Menu>
  )
}
