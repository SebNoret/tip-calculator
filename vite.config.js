import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
export default defineConfig({
  base: "http://localhost:80/tip/", // Permet de définir le chemin de base de l'application

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
});
