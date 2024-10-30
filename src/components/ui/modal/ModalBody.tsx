import { type ReactNode, useEffect, useRef } from 'react'
import { AnimatePresence, motion as M } from 'framer-motion'
import { useOutsideClick } from '@src/hooks'
import { Overlay } from '@src/components/ui/background/Overlay'
import { Button } from '@src/components/ui/button'
import { Icon } from '@src/components/ui/icon'
import { useModal } from '@src/components/ui/modal'
import { cn } from '@src/utils/styles'

export const ModalBody = ({ children, className }: { children: ReactNode; className?: string }) => {
  const { open, setOpen } = useModal()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  const modalRef = useRef(null)
  useOutsideClick(modalRef, () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <M.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: 'blur(10px)',
          }}
          exit={{
            opacity: 0,
            backdropFilter: 'blur(0px)',
          }}
          className='fixed inset-0 z-50 flex h-full w-full items-center justify-center [perspective:800px] [transform-style:preserve-3d]'
        >
          <Overlay />

          <M.div
            ref={modalRef}
            className={cn(
              'relative z-50 flex max-h-[90%] min-h-[50%] flex-1 flex-col overflow-hidden border border-transparent bg-white md:max-w-[40%] md:rounded-2xl dark:border-neutral-800 dark:bg-neutral-950',
              className,
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 15,
            }}
          >
            <Button size='xs' color='default' onClick={() => setOpen(!open)}>
              <Icon name='x' />
            </Button>
            {children}
          </M.div>
        </M.div>
      )}
    </AnimatePresence>
  )
}
