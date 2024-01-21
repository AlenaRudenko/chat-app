import { useEffect } from 'react'
import { SocketApiServise } from '../services/SocketApi.service'

export const useConnectSocket = () => {
  const connectSocket = () => {
    SocketApiServise.createConnection()
  }

  useEffect(() => {
    connectSocket()
  }, [])
}
