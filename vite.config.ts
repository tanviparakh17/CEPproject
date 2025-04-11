import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Ensure the port matches the one you are accessing
    open: true, // Automatically open the browser
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
