import { StrictMode } from 'react'
import { App } from '@src/App.tsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
