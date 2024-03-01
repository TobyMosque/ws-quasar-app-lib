import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ outDir: './dist/types' })],
  build: {
    lib: {
      entry: {
        components: resolve(__dirname, "src/components/index.ts"),
        composables: resolve(__dirname, "src/composables/index.ts"),
        resolvers: resolve(__dirname, "src/resolvers/index.ts"),
        types: resolve(__dirname, "src/types/index.ts"),
      },
      
      name: "WsQuasarLibrary",
      fileName: (format, entry) => {
        const ext = format === 'es' ? 'js' : 'cjs'
        return entry + '.' + ext 
      },
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
      'composables': resolve(__dirname, 'src/composables'),
      'resolvers': resolve(__dirname, 'src/resolvers'),
      'types': resolve(__dirname, 'src/types'),
    }
  }
})
