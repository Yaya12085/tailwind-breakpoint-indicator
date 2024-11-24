import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['tailwind-breakpoint-indicator']
  }
})
