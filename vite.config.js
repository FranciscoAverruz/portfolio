/* eslint-disable no-undef */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@imgLanguage': path.resolve(__dirname, 'src/assets/images/languages'),
      '@imgTech': path.resolve(__dirname, 'src/assets/images/technologies'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      // Agrega más alias según sea necesario
    },
  },
})
