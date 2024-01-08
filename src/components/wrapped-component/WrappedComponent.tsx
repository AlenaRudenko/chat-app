import { PropsWithChildren } from 'react'
import { CircularProgress } from '@mui/material'
import { useAuth } from './auth.hooks'

type TProps = PropsWithChildren

export const ProtectedRoute = ({ children }: TProps) => {
  const isLoading = useAuth()

  return <div>{isLoading ? <CircularProgress color='primary' /> : children}</div>
}
