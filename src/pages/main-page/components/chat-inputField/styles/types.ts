import { ReactElement } from 'react'
import { type AppBarProps as MuiAppBarProps } from '@mui/material'

export interface IProps extends React.PropsWithChildren {
  children: ReactElement
  isDrawerOpen?: boolean
}

export type AppBarProps = {
  open?: boolean
} & MuiAppBarProps
