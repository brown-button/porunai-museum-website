import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  esbuild: {
    loader: 'tsx',
    logLevel: 'silent'
  }
});
