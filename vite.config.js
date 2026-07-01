import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/git-tutorial/', 
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs', 
  }
})