import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { memo, useEffect, useState } from 'react'
import { TState } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getChannels } from '../../../../../store/store'
import { logoutUser } from '../../../../../store/user-slice/thunk'
import { useNavigate } from 'react-router-dom'
import { clearChannels } from '../../../../../store/channels-slice/channelsSlice'
interface IProps {
  handleOpenModal: () => void
  handleLogOut: () => void
}
export const ChatMenu = memo(({ handleOpenModal, handleLogOut }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<TState['anchorEl']>(null)
  const channels = useSelector(getChannels)
  const dispatch = useDispatch<AppDispatch>()
  const isMenuOpen = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null)
    } else setAnchorEl(event.currentTarget)
  }

  const handleCreate = (event: React.MouseEvent<HTMLElement>) => {
    handleOpenModal()
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
