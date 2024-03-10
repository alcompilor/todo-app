import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
        'import.meta.env.API_ENDPOINT': process.env.API_ENDPOINT,
  },
  preview: {
    host: '0.0.0.0',
    port: 5000
  }
})
