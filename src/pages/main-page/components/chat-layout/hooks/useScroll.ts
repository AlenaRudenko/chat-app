import { useEffect, useRef } from 'react'
import { TMessage } from '../../../../../interfaces/message'

export const useScroll = (messages: TMessage[]) => {
  const scrollRef = useRef(null)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: 'smooth' })
    }
  }, [messages])
  useEffect(() => {

  },[messages])
  const handleScrollButton = () => {
    scrollRef.current.scrollIntoView({ behaviour: 'smooth' })
  }
  return { scrollRef,handleScrollButton }
}
