import { useContext } from 'react'
import { LayoutContext as Context } from '@src/contexts/layoutContext'

export const useLayout = () => {
  const context = useContext(Context)

  if (!context) throw new Error('useLayout must be used within a Layout provider')

  return context
}
