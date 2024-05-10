import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
const test = "http://localhost:80/dist/";
const dev = "http://localhost:5173/";
const local = "http://localhost:1313/splitter/demo";
const prod = "https://sebnoret-portfolio.netlify.app/splitter/demo/";
export default defineConfig({
  base: prod, // Permet de définir le chemin de base de l'application

  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    ViteMinifyPlugin({}),

    createHtmlPlugin({
      minify: true, // Active la minification des fichiers HTML
      collapseWhitespace: true, // Réduit les espaces vides
      removeComments: true, // Supprime les commentaires
    }),
  ],
  build: {
    sourcemap: true,

    // chunkSizeWarningLimit: 1000,
  },
});
