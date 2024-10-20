import { createContext } from 'react'
import { LayoutContextType } from '@src/contexts/layoutContext'

export const LayoutContext = createContext<LayoutContextType>({
  toggle: false,
  handleToggle: async () => {},
})
