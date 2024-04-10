import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const FRONTEND_PORT: number = parseInt(process.env.FRONTEND_PORT || '3000'); //Parsed for type safty in config types

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
    port: FRONTEND_PORT,
    strictPort: true,
  },
  server: {
    port: FRONTEND_PORT,
    strictPort: true,
    host: true,
    origin: `http://0.0.0.0:${FRONTEND_PORT}`,
  },
});
