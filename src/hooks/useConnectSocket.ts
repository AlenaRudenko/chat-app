import { useEffect } from 'react'
import { SocketApiServise } from '../services/SocketApi.service'

export const useConnectSocket = () => {
  const connectSocket = () => {
    SocketApiServise.socket.on('connect', () => {
      console.log(SocketApiServise.socket.id) // ojIckSD2jqNzOqIrAGzL
    })
  }

  useEffect(() => {
    connectSocket()
  }, [])
}
