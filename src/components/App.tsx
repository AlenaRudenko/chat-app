import { useEffect, useState } from 'react'
import './style.scss'

export const App = () => {
  const [state, setState] = useState(1)
  console.log(true)
  const func = (name: string) => {
    return
  }
  useEffect(() => {
    const a = state + 1
  }, [])
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}
