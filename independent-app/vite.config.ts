import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const PATH_TO_LOCAL_PACKAGE = '../monorepo/packages/public-lib/index.ts'

  return {
    plugins: [react()],
    resolve: {
      alias: isDev
        ? {
          'monorepo-external-lib-public': path.resolve(__dirname, PATH_TO_LOCAL_PACKAGE),
        }
        : undefined,
    },
  }
})

// export default defineConfig({
//   plugins: [react()],
// })
