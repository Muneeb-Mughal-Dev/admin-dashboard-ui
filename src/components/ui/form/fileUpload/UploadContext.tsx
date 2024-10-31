import { createContext } from 'react'
import { type UploadContextType } from '@src/components/ui/form/fileUpload'

export const UploadContext = createContext<UploadContextType | undefined>(undefined)
