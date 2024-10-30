import { type ReactNode } from 'react'
import { useModal } from '@src/components/ui/modal/useModal'
import { cn } from '@src/utils/styles'

export const ModalTrigger = ({ children, className }: { children: ReactNode; className?: string }) => {
  const { setOpen } = useModal()
  return (
    <button
      className={cn('relative overflow-hidden rounded-md px-4 py-2 text-center text-black dark:text-white', className)}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  )
}
