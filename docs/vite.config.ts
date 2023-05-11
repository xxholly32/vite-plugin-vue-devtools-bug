
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
  ],
})
