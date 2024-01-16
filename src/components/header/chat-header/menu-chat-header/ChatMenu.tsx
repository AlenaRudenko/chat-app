import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { memo, useState } from 'react'
import { TState } from './types'
import { batch, useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../store/store'
import { logoutUser } from '../../../../store/user-slice/thunk'
import { useNavigate } from 'react-router-dom'
import { clearChannels } from '../../../../store/channels-slice/channelsSlice'
import { clearMessages } from '../../../../store/messages-slice/messagesSlice'

export const ChatMenu = memo(() => {
  const [anchorEl, setAnchorEl] = useState<TState['anchorEl']>(null)
  const dispatch = useDispatch<AppDispatch>()
  const isMenuOpen = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null)
    } else setAnchorEl(event.currentTarget)
  }
  const handleLogOut = () => {
    dispatch(logoutUser(() => navigate('/auth')))
    dispatch(clearChannels())
    dispatch(clearMessages())
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
        <MenuItem value='logOut' onClick={handleLogOut}>
          Выйти из аккаунта
        </MenuItem>
      </Menu>
    </>
  )
})
