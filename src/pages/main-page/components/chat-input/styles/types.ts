import { type AppBarProps as MuiAppBarProps } from '@mui/material'
import { TInputEvent } from '../../../../../interfaces/event'

export type AppBarProps = {
  open?: boolean
} & MuiAppBarProps

export interface ChatIProps {
  value: string
  handleChange: (e: TInputEvent) => void
  isDisabled: boolean
}
