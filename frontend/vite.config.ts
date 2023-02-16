import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: { alias: { '@': '/src' } },
    plugins: [],
    build: {
        rollupOptions: {
            cache: false
        }
    },
    server: {
        host: true, 
        port: 8127,
        hmr: false
    }
})
