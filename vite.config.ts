import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js into its own chunk
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate Framer Motion
          animation: ['framer-motion'],
          // Separate React and React DOM
          react: ['react', 'react-dom'],
          // Separate icons
          icons: ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
