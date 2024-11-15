import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
  build: {
    lib: {
      name: 'SimpdWebLib',
      entry: path.resolve(__dirname, './src/index.ts'),
    }
  },
  plugins: [tsconfigPaths(), viteCommonjs(), react()],
});