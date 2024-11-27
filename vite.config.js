/* eslint-disable no-undef */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@imgLanguage': path.resolve(__dirname, 'src/assets/images/languages'),
      '@imgTech': path.resolve(__dirname, 'src/assets/images/technologies'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@sections': path.resolve(__dirname, 'src/components/sections'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@src': path.resolve(__dirname, 'src/'),
    },
  },
  build: {
    outDir: 'dist', 
    minify: 'esbuild',
    assetsInlineLimit: 4096,
    rollupOptions: {
      treeshake: true, 
  },
  },
  
})
