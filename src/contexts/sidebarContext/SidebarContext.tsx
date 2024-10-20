import { createContext } from 'react'
import { SidebarContextProps } from '@src/contexts/sidebarContext'

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)
