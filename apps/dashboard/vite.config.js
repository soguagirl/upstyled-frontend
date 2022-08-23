import fs from 'fs'
import path from 'path'
import lessToJs from 'less-vars-to-js'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

const themeVars = lessToJs(
  fs.readFileSync(path.resolve(__dirname, '../../packages/assets/theme.less'), 'utf8'),
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createStyleImportPlugin({ resolves: [AntdResolve()] })],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVars,
      },
    },
  },
})
