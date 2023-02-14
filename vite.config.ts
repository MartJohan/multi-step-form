import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MartJohan/multi-step-form',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./MartJohan/multi-step-form/src", import.meta.url)),
    },
  },
});
