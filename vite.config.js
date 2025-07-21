import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/HomeWork-Week-6/' : '/',
  plugins: [react()],
  server: {
    open: '/',      // 啟動後自動開啟首頁
    port: 5173,     // 可依需要改為其他 port
  },
  build: {
    outDir: 'dist', // 打包輸出資料夾
  },
});



