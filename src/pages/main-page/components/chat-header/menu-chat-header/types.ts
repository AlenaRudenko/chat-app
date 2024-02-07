import { TMouseEvent } from '../../../../../interfaces/event'
import { IChildrenProp } from '../../../../../interfaces/childrenProp'

export type TState = {
  anchorEl: null | HTMLElement
}

export type IProps = {
  handleViewModal: () => void
  handleLogOut: () => void
}

export type TMenuProps = {
  children: IChildrenProp['children']
  isMenuOpen: boolean
  handleMenu: (event: TMouseEvent) => void
} & TState
