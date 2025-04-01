import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Use this if you want to use the alias in development mode using vite
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [react()],
    resolve: {
      alias: isDev
        ? {
          'monorepo-external-lib': path.resolve(__dirname, './monorepo/packages/public-lib/src'),
        }
        : undefined,
    },
  }
})

// export default defineConfig({
//   plugins: [react()],
// })
