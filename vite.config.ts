import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(() => {
    return {
        plugins: [react()],
        resolve: {
            alias: [
                {
                    find: '@src/',
                    replacement: path.resolve(process.cwd(), 'src') + '/',
                },
            ],
        },
    }
})
