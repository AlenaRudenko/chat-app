import React, { createContext, useCallback, useContext, useState } from 'react'
import { TContext } from './types'

export const DrawerContext = createContext<TContext>({} as TContext)

export const DrawerProvider = ({ children }: React.PropsWithChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  const handleIsDrawerOpen = useCallback(() => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen)
  }, [])
  return <DrawerContext.Provider value={{ isDrawerOpen, handleIsDrawerOpen }}>{children}</DrawerContext.Provider>
}

export const useDrawer = () => {
  return useContext(DrawerContext)
}
