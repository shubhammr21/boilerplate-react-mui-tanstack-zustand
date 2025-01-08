import react from "@vitejs/plugin-react-swc"
import path from "node:path"
import { defineConfig } from "vite"

import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
