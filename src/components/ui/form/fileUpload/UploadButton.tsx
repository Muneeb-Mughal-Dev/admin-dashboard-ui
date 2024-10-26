import { useState } from 'react'
import { AnimatePresence, motion as M } from 'framer-motion'
import { main, secondary } from '@src/components/animations'
import { Icon } from '@src/components/ui/icon'
import { cn } from '@src/utils/styles'

export interface UploadButtonProps {
  className?: string
  onClick: () => void
  isDragActive: boolean
}

export const UploadButton: React.FC<UploadButtonProps> = ({ onClick, className, isDragActive }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <AnimatePresence mode='sync'>
      <M.div
        onClick={onClick}
        initial='initial'
        animate={isAnimating ? 'animate' : 'initial'}
        whileHover='animate'
        onMouseEnter={() => setIsAnimating(!isAnimating)}
        onMouseLeave={() => setIsAnimating(!isAnimating)}
        className='group/file w-full'
      >
        <M.div
          layoutId='file-upload'
          variants={main}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          className={cn(
            'shadow-large relative z-40 mx-auto flex h-32 w-full max-w-[8rem] items-center justify-center rounded-md bg-default-50 text-default-600 transition-colors duration-300 ease-in-out group-hover/file:bg-primary-hover group-hover/file:text-primary-foreground',
            className,
          )}
        >
          {isDragActive ?
            <M.p initial={{ opacity: 1 }} animate={{ opacity: 0.5 }} className='flex flex-col items-center'>
              Drop it
              <Icon name='upload' />
            </M.p>
          : <Icon name='upload' />}
        </M.div>
        <M.div
          variants={secondary}
          className='absolute inset-0 z-30 mx-auto flex h-32 w-full max-w-[8rem] items-center justify-center rounded-md border border-dashed border-primary-active bg-transparent opacity-0'
        />
      </M.div>
    </AnimatePresence>
  )
}
