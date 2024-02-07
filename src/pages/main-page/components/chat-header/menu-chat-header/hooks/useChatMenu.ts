import { useState } from 'react'
import { IProps, TState } from '../types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../../../store/store'
import { useNavigate } from 'react-router-dom'
import { TMouseEvent } from '../../../../../../interfaces/event'
import { logoutUser } from '../../../../../../store/user-slice/thunk'
import { clearChannels } from '../../../../../../store/channels-slice/channelsSlice'

export const useChatMenu = ({ handleViewModal, handleLogOut }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<TState['anchorEl']>(null)
  const isMenuOpen = Boolean(anchorEl)

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleMenu = (event: TMouseEvent) => {
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

  return { anchorEl, isMenuOpen, handleMenu, handleCreate, handleLogOutUser }
}
