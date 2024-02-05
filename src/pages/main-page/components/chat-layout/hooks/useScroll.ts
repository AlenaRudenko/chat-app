import { useEffect, useRef } from 'react'
import { TMessage } from '../../../../../interfaces/message'

export const useScroll = (messages: TMessage[]) => {
  const scrollRef = useRef(null)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: 'smooth' })
    }
  }, [messages])
  return { scrollRef }
}
