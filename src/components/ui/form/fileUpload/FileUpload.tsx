import { Upload, UploadProvider } from '@src/components/ui/form/fileUpload'

export const FileUpload = ({ onChange }: { onChange?: (files: File[]) => void }) => {
  return (
    <UploadProvider>
      <Upload onChange={onChange} />
    </UploadProvider>
  )
}
