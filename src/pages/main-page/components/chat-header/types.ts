import { ColoredChannel } from '../../../../interfaces/channel'
import { type BoxProps as MuiBoxProps } from '@mui/material'

export type IProps = {
  handleLogOut: () => void
  currentChannel: ColoredChannel
}
export type HeaderBoxProps = {
  open?: boolean
} & MuiBoxProps
