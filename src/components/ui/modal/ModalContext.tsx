import { createContext } from 'react'
import { ModalContextType } from '@src/components/ui/modal'

export const ModalContext = createContext<ModalContextType | undefined>(undefined)
