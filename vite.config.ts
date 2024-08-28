import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // anytime we find @ replace it with current directory folder
resolve: {
  alias : [{ find: "@", replacement: path.resolve(__dirname, "src")}]
},
})
