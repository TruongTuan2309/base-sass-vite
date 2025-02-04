import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from '@svgr/rollup'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import MillionLint from '@million/lint'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), visualizer(), viteCompression(), MillionLint.vite()],
  server: {
    port: 3000,
    open: true
  },
  cacheDir: 'node_modules/.vite',
  build: {
    minify: 'terser',
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
          if (id.includes('src/pages/')) {
            return 'pages'
          }
          if (id.includes('src/components/')) {
            return 'components'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  envPrefix: 'VITE_'
})
