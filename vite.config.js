import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Ajustez le chemin de la base en fonction de votre configuration de déploiement
    base: '/chemin-vers-votre-application/',

    // Minification pour la production
    minify: 'terser',

    // Gérer les chemins relatifs pour le déploiement
    assetsDir: 'assets',
  },
});
