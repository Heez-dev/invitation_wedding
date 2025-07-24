import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // SCSS에서는 vite-tsconfig-paths가 동작하지 않기 때문에 alias 별도 명시
      '@scss': path.resolve(__dirname, 'src/scss'),
      // 필요한 경우 다른 alias도 추가
    },
  },
})
