export interface IProps {
  handleDrawerOpen: () => void
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void
  anchorEl: null | HTMLElement
  isDrawerOpen: boolean
}
