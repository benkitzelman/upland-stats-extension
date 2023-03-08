import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  worker: {
    plugins: [vue(), vueJsx()],
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      }
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      input: {
        ui: fileURLToPath(new URL("./index.html", import.meta.url)),
        worker: "./src/worker/index.ts",
        embedded: "./src/embedded/index.ts"
      },
      output: [{
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      }]
    },
  },
});
