import { AnimatePresence, motion as M } from 'framer-motion'
import { Button } from '@src/components/ui/button'
import { Icon } from '@src/components/ui/icon'
import { cn } from '@src/utils/styles'

export interface UploadedFileProps {
  files: File[]
  className?: string
  removeFile: (name: string) => void
}

export const UploadedFile: React.FC<UploadedFileProps> = ({ files, className, removeFile }) => {
  return (
    <AnimatePresence mode='sync'>
      {files.map((file: File, idx: number) => (
        <M.div
          layout
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          key={'file' + idx}
          layoutId={idx === 0 ? 'file-upload' : 'file-upload-' + idx}
        >
          <div
            className={cn(
              'relative z-40 mx-auto flex w-full flex-col items-start justify-start gap-2 overflow-hidden rounded-md bg-default-50 p-4 shadow-small',
              className,
            )}
          >
            <div className='flex w-full items-center justify-between gap-4'>
              <M.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layout
                className='max-w-xs truncate text-base/7 text-default-600'
              >
                {file.name}
              </M.p>
            </div>

            <div className='mt-2 flex w-full flex-col items-start justify-between text-sm text-default-400 md:flex-row md:items-center'>
              <M.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout className='flex items-center gap-2'>
                <M.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                  className='w-fit flex-shrink-0 rounded-md border border-divider bg-default-100 px-2.5 py-1 text-sm text-default-600 shadow-small'
                >
                  {file.type}
                </M.p>
                <M.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                  className='w-fit flex-shrink-0 rounded-md border border-divider bg-default-100 px-2.5 py-1 text-sm text-default-600 shadow-small'
                >
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </M.p>
              </M.div>

              <M.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout>
                modified {new Date(file.lastModified).toLocaleDateString()}
              </M.p>
            </div>
            <Button
              size='xs'
              shadow='md'
              color='danger'
              className='absolute right-4 top-4 p-1.5'
              onClick={() => removeFile(file.name)}
            >
              <Icon name='trash' size={18} />
            </Button>
          </div>
        </M.div>
      ))}
    </AnimatePresence>
  )
}
