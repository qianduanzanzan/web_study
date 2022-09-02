import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  assetsInclude: ['webWorker/*.ts'],
  server: {
    port: 8099
  }
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import '@/assets/style/common.scss';@import '@/assets/style/variables.scss';`,
  //     },
  //   },
  // }
})
