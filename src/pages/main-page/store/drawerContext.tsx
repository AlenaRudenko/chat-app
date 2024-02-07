import React, { createContext, useCallback, useContext, useState } from 'react'
import { TContext } from './types'
import { IChildrenProp } from '../../../interfaces/childrenProp'

export const DrawerContext = createContext<TContext>({} as TContext)

export const DrawerProvider = ({ children }: IChildrenProp) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  const handleIsDrawerOpen = useCallback(() => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen)
  }, [])
  return <DrawerContext.Provider value={{ isDrawerOpen, handleIsDrawerOpen }}>{children}</DrawerContext.Provider>
}

export const useDrawer = () => {
  return useContext(DrawerContext)
}
