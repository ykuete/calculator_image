import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    allowedHosts: ['gha-workshop-fcaaftdnf5e9dsa3.centralus-01.azurewebsites.net']
  },
})
