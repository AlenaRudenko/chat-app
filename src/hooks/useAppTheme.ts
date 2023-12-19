import { useCallback, useEffect, useState } from 'react'
import { newDarkTheme, newLightTheme } from '../theme/themes'

export const useAppTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('darkTheme') === 'true')

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prevState) => !prevState)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkTheme', `${isDarkTheme}`)
  }, [isDarkTheme])

  return [isDarkTheme ? newDarkTheme : newLightTheme, toggleTheme] as const
}
