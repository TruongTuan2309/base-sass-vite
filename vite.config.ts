import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from '@svgr/rollup'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import MillionLint from "@million/lint";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), visualizer({ open: true }), viteCompression(),MillionLint.vite()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    sourcemap: true, // Generate source maps for debugging
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  envPrefix: 'ENV_'
})
