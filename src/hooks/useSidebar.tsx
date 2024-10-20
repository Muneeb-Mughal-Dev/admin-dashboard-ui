import { useContext } from 'react'
import { SidebarContext as Context } from '@src/contexts/sidebarContext'

export const useSidebar = () => {
  const context = useContext(Context)

  if (!context) throw new Error('useSidebar must be used within a SidebarProvider')

  return context
}
