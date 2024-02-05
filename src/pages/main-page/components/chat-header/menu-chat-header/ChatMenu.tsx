import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IProps, TState } from './types'
import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { AppDispatch } from '../../../../../store/store'
import { logoutUser } from '../../../../../store/user-slice/thunk'
import { clearChannels } from '../../../../../store/channels-slice/channelsSlice'

export const ChatMenu = memo(({ handleViewModal, handleLogOut }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<TState['anchorEl']>(null)
  const isMenuOpen = Boolean(anchorEl)

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null)
    } else setAnchorEl(event.currentTarget)
  }

  const handleCreate = (event: React.MouseEvent<HTMLElement>) => {
    handleViewModal()
    if (anchorEl) {
      setAnchorEl(null)
    } else setAnchorEl(event.currentTarget)
  }

  const handleLogOutUser = () => {
    handleLogOut()
    dispatch(logoutUser(() => navigate('/auth')))
    dispatch(clearChannels())
  }

  return (
    <>
      <IconButton
        aria-controls={open ? 'menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        id='menu'
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
        aria-labelledby='menu'
        id='menu'
        open={isMenuOpen}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleMenu}
      >
        <MenuItem value='createChannel' onClick={handleCreate}>
          Создать канал
        </MenuItem>
        <MenuItem value='logOut' onClick={handleLogOutUser}>
          Выйти из аккаунта
        </MenuItem>
      </Menu>
    </>
  )
})
