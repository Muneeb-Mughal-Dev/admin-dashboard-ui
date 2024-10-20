import { useState } from 'react'
import { SidebarContext, type SidebarProviderProps } from '@src/contexts/sidebarContext'

export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true }: SidebarProviderProps) => {
  const [openState, setOpenState] = useState<boolean>(false)

  const open = openProp !== undefined ? openProp : openState
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState

  return <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>{children}</SidebarContext.Provider>
}
