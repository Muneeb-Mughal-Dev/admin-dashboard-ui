import { useContext } from 'react'
import { ModalContext } from '@src/components/ui/modal'

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}