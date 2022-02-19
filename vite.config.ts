import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {vitePluginComponent} from '@datahu/vite-plugin-component'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginComponent()]
})
