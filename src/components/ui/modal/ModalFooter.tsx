import { type ReactNode } from 'react'
import { cn } from '@src/utils/styles'

export const ModalFooter = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('flex justify-end bg-gray-100 p-4 dark:bg-neutral-900', className)}>{children}</div>
}
