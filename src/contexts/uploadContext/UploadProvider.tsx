import { useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { UploadContext, type UploadProviderProps } from '@src/contexts/uploadContext'

export const UploadProvider: React.FC<UploadProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<File[]>([])
  const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([])

  const handleFiles = (newFiles: File[]) => {
    const updatedFiles = [...files, ...newFiles]
    setFiles(updatedFiles)
  }

  const removeFile = (fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName)
    setFiles(updatedFiles)
  }

  const handleRejectedFiles = (newFiles: FileRejection[]) => {
    const updatedFiles = [...rejectedFiles, ...newFiles]
    setRejectedFiles(updatedFiles)
  }

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFiles,
    onDropRejected: handleRejectedFiles,
  })

  return (
    <UploadContext.Provider
      value={{
        files,
        getRootProps,
        handleFiles,
        isDragActive,
        rejectedFiles,
        removeFile,
      }}
    >
      {children}
    </UploadContext.Provider>
  )
}
