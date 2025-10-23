import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
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
    // 简化压缩配置 - 让 Vite 使用默认的 terser 配置
    minify: 'terser',
    // 移除有问题的 terserOptions，使用默认配置
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});