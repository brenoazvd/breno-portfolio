import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' = assets relativos, funciona em qualquer host (GitHub Pages em
// subpasta, VPS, Netlify) sem saber o nome do repo. Combina com HashRouter.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
