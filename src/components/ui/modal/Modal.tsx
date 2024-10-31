import { type ReactNode } from 'react'
import { ModalProvider } from '@src/components/ui/modal'

export function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>
}
