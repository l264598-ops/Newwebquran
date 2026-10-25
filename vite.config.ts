import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          courses: path.resolve(__dirname, 'courses.html'),
          pricing: path.resolve(__dirname, 'pricing.html'),
          demo: path.resolve(__dirname, 'demo.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          resources: path.resolve(__dirname, 'resources.html'),
          books: path.resolve(__dirname, 'books.html'),
          login: path.resolve(__dirname, 'login.html'),
          register: path.resolve(__dirname, 'register.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          terms: path.resolve(__dirname, 'terms.html'),
          shop: path.resolve(__dirname, 'shop.html'),
        },
      },
    },
  };
});
