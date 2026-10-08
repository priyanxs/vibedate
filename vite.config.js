import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use './' for relative asset paths so it works seamlessly on any GitHub Pages repository
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
