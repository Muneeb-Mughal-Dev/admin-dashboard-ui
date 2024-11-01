import { useCallback, useState } from 'react'
import { FileUpload } from '@src/components/ui/form'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@src/components/ui/modal'

export default function HomePage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleFileChange = useCallback((files: File[]) => {
    setUploadedFiles(files)
  }, [])

  return (
    <>
      <div className='flex items-center justify-center py-40'>
        <Modal>
          <ModalTrigger className='group/modal-btn flex justify-center bg-black text-white dark:bg-white dark:text-black'>
            <span className='text-center transition duration-500 group-hover/modal-btn:translate-x-40'>Book your flight</span>
            <div className='absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0'>
              ✈️
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className='mb-8 text-center text-lg font-bold text-neutral-600 md:text-2xl dark:text-neutral-100'>
                Book your trip to
                <span className='rounded-md border border-gray-200 bg-gray-100 px-1 py-0.5 dark:border-neutral-700 dark:bg-neutral-800'>
                  Bali
                </span>
                now! ✈️
              </h4>
            </ModalContent>
            <ModalFooter className='gap-4'>
              <button className='w-28 rounded-md border border-gray-300 bg-gray-200 px-2 py-1 text-sm text-black dark:border-black dark:bg-black dark:text-white'>
                Cancel
              </button>
              <button className='w-28 rounded-md border border-black bg-black px-2 py-1 text-sm text-white dark:bg-white dark:text-black'>
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      <div className='max-w-sm'>
        <div>
          <FileUpload onChange={handleFileChange} />
        </div>
        <div className='space-y-4 px-4 py-8'>
          <h3>Uploaded Files:</h3>
          <ul className='space-y-2'>
            {uploadedFiles.map((file) => (
              <li key={file.name} className='rounded-md bg-default p-2'>
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex gap-2'>
        {[...new Array(4)].map((i) => (
          <div key={'first-array' + i} className='h-20 w-full animate-pulse rounded-md bg-default-100' />
        ))}
      </div>
      <div className='flex gap-2'>
        {[...new Array(5)].map((i) => (
          <div key={'first-array' + i} className='h-20 w-full animate-pulse rounded-md bg-default-100' />
        ))}
      </div>
      <div className='flex gap-2'>
        {[...new Array(6)].map((i) => (
          <div key={'second-array' + i} className='h-64 w-full animate-pulse rounded-md bg-default-100' />
        ))}
      </div>
    </>
  )
}
