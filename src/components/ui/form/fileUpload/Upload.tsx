import { useEffect, useRef } from 'react'
import { AnimatePresence, motion as M } from 'framer-motion'
import { GridPattern } from '@src/components/ui/background'
import { UploadButton, UploadedFile, useUpload } from '@src/components/ui/form/fileUpload'

export const Upload = ({ onChange }: { onChange?: (files: File[]) => void }) => {
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
      <M.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 35,
          velocity: 50,
        }}
        className='relative block max-h-[450px] w-full overflow-hidden rounded-md border border-divider px-2 py-4 md:px-6 md:py-6'
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
        <M.div layout className='flex flex-col items-center justify-center gap-6'>
          <div className='space-y-2 text-center'>
            <p className='relative z-20 font-primary font-bold text-foreground md:text-lg'>Upload file</p>
            <p className='relative z-20 text-sm font-normal text-default-400'>Drag or drop your files here or click to upload</p>
          </div>
          <div className='relative mx-auto w-full max-w-xl cursor-pointer space-y-6' {...getRootProps()}>
            <UploadButton isDragActive={isDragActive} onClick={handleClick} />
            <div className='scrollbar flex max-h-[125px] flex-col gap-2 overflow-y-scroll px-2'>
              {files.length > 0 && <UploadedFile files={files} removeFile={removeFile} />}
            </div>
          </div>
        </M.div>
      </M.div>
    </AnimatePresence>
  )
}