import { useState } from 'react'
import { LayoutContext } from '@src/contexts/layoutContext'

export const LayoutProvider: React.FC<Children> = ({ children }) => {
    const [toggle, setToggle] = useState<boolean>(false)
    const [sidebar, setSidebar] = useState<boolean>(false)

    const handleToggle = async () => {
        setToggle(!toggle)
    }

    const handleSidebar = async () => {
        setSidebar(!sidebar)
    }

    return <LayoutContext.Provider value={{ toggle, handleToggle, sidebar, handleSidebar }}>{children}</LayoutContext.Provider>
}
