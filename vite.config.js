import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import vuetify from 'vite-plugin-vuetify'
import externalize from "vite-plugin-externalize-dependencies"
import fs from 'fs'
import path from 'path'
import versionCleanup from 'mfe-test-scripts/plugins/version-cleanup'
import renameMainFile from 'mfe-test-scripts/plugins/rename-main-file'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'))
const version = packageJson.version

export default defineConfig(({ mode }) => {
  const isDev = mode === 'staging' || mode === 'development';
  
  return {
    plugins: [
      vue(),
      vueDevTools(),
      vuetify({ autoImport: true }),
      vitePluginSingleSpa({
        type: isDev ? 'root' : 'app',
        serverPort: 4101,
        spaEntryPoints: `src/main.js`,
        cssStrategy: 'multiMife'
      }),
      externalize({
        externals: ['@shared/utility'],
      }),
      renameMainFile(version, 'dist'),
      versionCleanup(5, __dirname),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      port: 4101,
    },
    build: {
      target: 'esnext',
      minify: true,
      manifest: true,
      cssCodeSplit: true,
      sourcemap: true,
      emptyOutDir: false,
      rollupOptions: {
        output: {
          entryFileNames: `main-${version}.js`,
          minifyInternalExports: false
        },
        external: ['@shared/utility']
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext'
      }
    }
  }
});