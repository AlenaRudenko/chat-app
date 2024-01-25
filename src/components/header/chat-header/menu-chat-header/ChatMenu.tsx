import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { memo, useEffect, useState } from 'react'
import { TState } from './types'
import { batch, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels } from '../../../../store/store'
import { logoutUser } from '../../../../store/user-slice/thunk'
import { useNavigate } from 'react-router-dom'
import { clearChannels } from '../../../../store/channels-slice/channelsSlice'

export const ChatMenu = memo(() => {
  const [anchorEl, setAnchorEl] = useState<TState['anchorEl']>(null)

  const channels = useSelector(getChannels)
  const dispatch = useDispatch<AppDispatch>()
  const isMenuOpen = Boolean(anchorEl)
  const navigate = useNavigate()
  useEffect(() => {
    console.log(channels)
  })
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null)
    } else setAnchorEl(event.currentTarget)
  }
  const handleLogOut = () => {
    dispatch(logoutUser(() => navigate('/auth')))
    dispatch(clearChannels())
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
        {channels && Array.isArray(channels) && (
          <MenuItem value='leaveChannel' onClick={handleMenu}>
            Покинуть канал
          </MenuItem>
        )}
        <MenuItem value='createChannel' onClick={handleLogOut}>
          Создать канал
        </MenuItem>
        <MenuItem value='logOut' onClick={handleLogOut}>
          Выйти из аккаунта
        </MenuItem>
      </Menu>
    </>
  )
})
