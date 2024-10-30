import { type ReactNode } from 'react'
import { cn } from '@src/utils/styles'

export const ModalContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('flex flex-1 flex-col p-8 md:p-10', className)}>{children}</div>
}
