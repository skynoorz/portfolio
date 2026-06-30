import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// `base` must match your GitHub Pages path:
//   - Project site (https://<user>.github.io/<repo>/)  ->  base: '/<repo>/'
//   - User/Org site (https://<user>.github.io/)         ->  base: '/'
//   - Custom domain (CNAME)                             ->  base: '/'
// It can be overridden at build time:  VITE_BASE=/my-repo/ npm run build
export default defineConfig(({ command }) => ({
  // Dev server runs at the root ("/"); only the production build uses the
  // GitHub Pages subpath, so `npm run dev` always works at http://localhost:5173/.
  base: command === 'build' ? process.env.VITE_BASE ?? '/portfolio/' : '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssMinify: true,
    sourcemap: false,
  },
}));
