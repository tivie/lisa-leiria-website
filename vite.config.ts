import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import * as path from "path";
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ViteRadar from 'vite-plugin-radar';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    vueJsx(),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-VKR2JB9VM3'
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    outDir: 'docs'
  }
})
