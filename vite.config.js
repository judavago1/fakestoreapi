import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fakestoreapi/', // 👈 nombre EXACTO de tu repositorio en GitHub
  plugins: [react()],
})
