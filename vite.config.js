import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlifyPlugin()],
 
})
