import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: './',
    plugins: [react()],
    server: {
        port: 3000,
<<<<<<< HEAD
        host: true,
        allowedHosts: true
    },
    build: {
        target: 'es2015'
=======
        host: true
>>>>>>> parent of 930f975 (allow hosts)
    }
})