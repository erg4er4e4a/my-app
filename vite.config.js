import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/my-app/', // 替換為您的 GitHub Repository 名稱
});