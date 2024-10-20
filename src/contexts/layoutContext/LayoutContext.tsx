import { createContext } from 'react'
import { LayoutContextType } from '@src/contexts/layoutContext'

export const LayoutContext = createContext<LayoutContextType>({
    toggle: false,
    sidebar: false,
    handleToggle: async () => {},
    handleSidebar: async () => void {},
})
