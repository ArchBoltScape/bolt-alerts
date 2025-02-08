import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
const dir = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(dir, "index.html"),
        ruleset: resolve(dir, "ruleset.html"),
      },
    },
  },
  plugins: [
    {
      name: "fixpluginhtml",
      transformIndexHtml: (html) =>
        html
          .replaceAll("crossorigin ", "")
          .replaceAll('"/assets', '"plugin://app/dist/assets'),
    },
    svelte(),
    tailwindcss(),
  ],
});
