import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { memo, useState } from 'react'
import { TState } from './types'

export const ChatMenu = memo(() => {
  const [anchorEl, setAnchorEl] = useState<TState['anchorEl']>(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null)
    } else setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <IconButton
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        id='demo-positioned-button'
        onClick={handleMenu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        aria-labelledby='demo-positioned-button'
        id='demo-positioned-menu'
        open={isMenuOpen}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleMenu}
      >
        <MenuItem value='leaveChannel' onClick={handleMenu}>
          Покинуть канал
        </MenuItem>
        <MenuItem value='logOut' onClick={handleMenu}>
          Выйти из аккаунта
        </MenuItem>
      </Menu>
    </>
  )
})
