import { useContext } from 'react'
import { UploadContext as Context } from '@src/components/ui/form/fileUpload'

export const useUpload = () => {
  const context = useContext(Context)

  if (!context) throw new Error('useUpload must be used within a UploadProvider')

  return context
}
