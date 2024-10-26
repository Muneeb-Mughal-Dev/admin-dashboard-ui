import { createContext } from 'react'
import { UploadContextType } from '@src/contexts/uploadContext'

export const UploadContext = createContext<UploadContextType | undefined>(undefined)
