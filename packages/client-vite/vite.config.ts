import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import vitePluginTrolling from './plugins/vite-plugin-trolling'
import vitePluginCodeStats from './plugins/vite-plugin-code-stats'
import vitePluginVirtualModule from './plugins/vite-plugin-virtual-module'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginVirtualModule(), vitePluginTrolling(), vitePluginCodeStats()],
})
