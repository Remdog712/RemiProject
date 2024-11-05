import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist', 
  publicDir: '../public', 
  build: {
    outDir: 'dist', 
  },
});
