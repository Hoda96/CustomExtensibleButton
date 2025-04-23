import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Required for React component testing
    globals: true, // Enable Vitest globals (describe, it, expect)
    setupFiles: ['./vitest.setup.ts'], // Optional setup file
    css: true, // Process CSS (e.g., Tailwind) during tests
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Match vite.config.ts
    },
  },
});