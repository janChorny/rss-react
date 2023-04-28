/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: [['istanbul']],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      exclude: ['**/src/utils/*'],
    },
  },
});
