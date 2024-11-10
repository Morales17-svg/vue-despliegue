import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), ghPages()],
  base: "vue-despliegue",
  resolve: {
    alias: {
      '@': '/src', // Configura el alias @ para apuntar a la carpeta src
    }
  }
})
