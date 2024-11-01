import { ReactNode } from 'react'
import { DropzoneRootProps, FileRejection } from 'react-dropzone'

export type UploadContextType = {
  files: File[]
  rejectedFiles: FileRejection[]
  handleFiles: (files: File[]) => void
  removeFile: (name: string) => void
  isDragActive: boolean
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T
}

export interface UploadProviderProps {
  children: ReactNode
  files?: File[]
  rejectedFiles?: FileRejection[]
  handleFiles?: (files: File[]) => void
  removeFile?: (name: string) => void
  isDragActive?: boolean
  getRootProps?: <T extends DropzoneRootProps>(props?: T) => T
}

export interface UploadButtonProps {
  className?: string
  onClick: () => void
  isDragActive: boolean
}

export interface UploadedFileProps {
  files: File[]
  className?: string
  removeFile: (name: string) => void
}