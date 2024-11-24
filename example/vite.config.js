import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["tailwindcss-breakpoint-indicator"],
  },
});
