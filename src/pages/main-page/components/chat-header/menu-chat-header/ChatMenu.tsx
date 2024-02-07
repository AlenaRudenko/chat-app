import { memo } from 'react'
import { IProps } from './types'
import { IconButton, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useChatMenu } from './hooks/useChatMenu'
import { MenuComponent } from './styles'

export const ChatMenu = memo(({ handleViewModal, handleLogOut }: IProps) => {
  const { anchorEl, isMenuOpen, handleMenu, handleCreate, handleLogOutUser } = useChatMenu({
    handleViewModal,
    handleLogOut,
  })
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
      <MenuComponent {...{ anchorEl, isMenuOpen, handleMenu }}>
        <>
          <MenuItem value='createChannel' onClick={handleCreate}>
            Создать канал
          </MenuItem>
          <MenuItem value='logOut' onClick={handleLogOutUser}>
            Выйти из аккаунта
          </MenuItem>
        </>
      </MenuComponent>
    </>
  )
})
