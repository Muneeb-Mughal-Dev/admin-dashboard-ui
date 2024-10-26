import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUpload } from '@src/hooks/useUpload'
import { GridPattern } from '@src/components/ui/background'
import { UploadButton, UploadedFile } from '@src/components/ui/form/fileUpload'

export const FileUpload = ({ onChange }: { onChange?: (files: File[]) => void }) => {
  const { files, getRootProps, handleFiles, isDragActive, removeFile } = useUpload()

  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    onChange && onChange(files)
  }, [files])

  const handleFileChange = (newFiles: File[]) => {
    handleFiles(newFiles)
    onChange && onChange(files)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <AnimatePresence mode='sync'>
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 35,
          velocity: 50,
        }}
        className='relative block max-h-[450px] w-full overflow-hidden rounded-md border border-divider p-6'
      >
        <input
          ref={fileInputRef}
          id='file-upload-handle'
          type='file'
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className='hidden'
        />
        <div className='absolute inset-0'>
          <GridPattern />
        </div>
        <motion.div layout className='flex flex-col items-center justify-center gap-6'>
          <div className='space-y-2 text-center'>
            <p className='relative z-20 font-primary font-bold text-foreground md:text-lg'>Upload file</p>
            <p className='relative z-20 text-sm font-normal text-default-400'>Drag or drop your files here or click to upload</p>
          </div>
          <div className='relative mx-auto w-full max-w-xl cursor-pointer space-y-6' {...getRootProps()}>
            <UploadButton isDragActive={isDragActive} onClick={handleClick} />
            <div className='flex max-h-[125px] flex-col gap-2 overflow-y-scroll'>
              {files.length > 0 && <UploadedFile files={files} removeFile={removeFile} />}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
