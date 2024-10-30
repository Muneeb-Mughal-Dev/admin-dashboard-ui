import { ReactNode, useState } from 'react'
import { ModalContext } from '@src/components/ui/modal'

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>
}
