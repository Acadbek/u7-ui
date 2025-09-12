import {
  defineConfig,
  presetWebFonts,
  presetWind4,
  presetIcons,
  presetAttributify,
  presetTagify,
  transformerAttributifyJsx,
} from "unocss";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons(),
    presetAttributify(),
    presetTagify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "IBM Plex Sans",
        mono: "Fira Code",
      },
      processors: createLocalFontProcessor({
        cacheDir: "node_modules/.cache/unocss/fonts",

        fontAssetsDir: "public/assets/fonts",

        fontServeBaseUrl: "/assets/fonts",

        fetch: async (url) => fetch(url),
      }),
    }),
  ],
  transformers: [transformerAttributifyJsx()],
});
