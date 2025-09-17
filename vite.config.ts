import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [react(), Unocss()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "u7-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
