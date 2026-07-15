import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site from /ohcscare/; Vercel (VERCEL=1 during build) serves from the domain root.
  base: mode === 'production' && !process.env.VERCEL ? '/ohcscare/' : '/',
}))
