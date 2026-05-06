import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (
              tag
          ) => tag.startsWith(
              "moov-"
          )
        }
      }
    }),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(
          new URL(
              "./src",
              import.meta.url
          )
      )
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [
      ".ngrok-free.app"
    ]
  }
});