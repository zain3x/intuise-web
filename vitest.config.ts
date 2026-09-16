import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    css: { include: /tokens\.css/ },
    include: ['src/**/*.test.ts'],
    exclude: ['archive/**', 'node_modules/**', 'dist/**'],
  },
});
