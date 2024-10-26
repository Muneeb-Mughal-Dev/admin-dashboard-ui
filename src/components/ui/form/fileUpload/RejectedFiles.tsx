import { FileRejection } from 'react-dropzone'

interface RejectedFilesProps {
  rejectedFiles: FileRejection[]
}

export const RejectedFiles: React.FC<RejectedFilesProps> = () => {
  return <div>RejectedFiles</div>
}
