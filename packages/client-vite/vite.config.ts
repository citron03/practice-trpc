import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import vitePluginTrolling from './plugins/vite-plugin-trolling'
import vitePluginCodeStats from './plugins/vite-plugin-code-stats'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginTrolling(), vitePluginCodeStats()],
})
