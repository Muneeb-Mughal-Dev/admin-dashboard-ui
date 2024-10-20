import { useState } from 'react'
import { LayoutContext } from '@src/contexts/layoutContext'

export const LayoutProvider: React.FC<Children> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = async () => {
    setToggle(!toggle)
  }

  return <LayoutContext.Provider value={{ toggle, handleToggle }}>{children}</LayoutContext.Provider>
}
