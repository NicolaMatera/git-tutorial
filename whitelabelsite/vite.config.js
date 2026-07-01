import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/git-tutorial/', 
  plugins: [
    tailwindcss(),
  ],
  build: {
    // Dice a Vite di salvare i file pronti un livello più in alto (../), 
    // ovvero direttamente nella root del tuo repository GitHub
    outDir: '../docs', 
  }
})