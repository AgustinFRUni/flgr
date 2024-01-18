import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import download from "downloadjs"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()
  ]
});