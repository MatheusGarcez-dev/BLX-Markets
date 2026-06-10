import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
    },
  },
  server: {
    // SPA: todas as rotas caem no index (dev)
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
