import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
					vue: ['vue', 'vue-router', 'pinia'],
					icons: ['@kalimahapps/vue-icons']
				}
      }
    }
  }
})
