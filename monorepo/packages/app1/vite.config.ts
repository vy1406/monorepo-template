import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// export default defineConfig(({ mode }) => {
//   const isDev = mode === 'development'

//   return {
//     plugins: [react()],
//     resolve: {
//       alias: isDev
//         ? {
//           'scs-contracts': path.resolve(__dirname, '../scs-contracts/src'),
//         }
//         : undefined,
//     },
//   }
// })

export default defineConfig({
  plugins: [react()],
})
