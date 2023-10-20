import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    proxy: {
      '/api': process.env.VITE_API_URL,
    },
  },
  optimizeDeps: {
    include: ['@svgr/webpack'],
  },
});
