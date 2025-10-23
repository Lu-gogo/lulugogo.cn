import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'esbuild', // 使用 ESBuild 的默认压缩设置
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop()?.toLowerCase();
          const imageExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];

          if (ext && imageExtensions.includes(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lodash')) return 'vendor-lodash';
            return 'vendor';
          }
        }
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});