import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ outDir: './dist/types' })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "WsQuasarLibrary",
      fileName: "ws-quasar-lib",
    },
    rollupOptions: {
      external: ["vue", "pinia", "quasar"],
      output: {
        globals: {
          vue: "Vue",
          pinia: "pinia",
          quasar: "quasar",
        }
      }
    }
  },
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components'),
      'stores': resolve(__dirname, 'src/stores'),
      'types': resolve(__dirname, 'src/types'),
    }
  }
})
