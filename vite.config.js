import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Due to docker configuration, we need to specify the host
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
