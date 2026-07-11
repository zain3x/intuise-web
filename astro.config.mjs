import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://intuise.com",
  output: "static",
  integrations: [
    react(),
    sitemap({ filter: (page) => !page.endsWith("/design-system/") }),
  ],
  build: { inlineStylesheets: "auto" },
});
