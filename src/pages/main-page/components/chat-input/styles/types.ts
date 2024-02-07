import { type AppBarProps as MuiAppBarProps } from '@mui/material'
import { TEvent } from '../../../../../interfaces/event'

export type AppBarProps = {
  open?: boolean
} & MuiAppBarProps

export interface ChatIProps {
  value: string
  handleChange: (e: TEvent) => void
  isDisabled: boolean
}
