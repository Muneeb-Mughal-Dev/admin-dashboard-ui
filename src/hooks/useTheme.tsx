import { useContext } from 'react'
import { ThemeContext as Context } from '@src/contexts/themeContext'

export const useTheme = () => {
    const context = useContext(Context)

    if (!context) throw new Error('useTheme must be used within a ThemeProvider')

    return context
}
