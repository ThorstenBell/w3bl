// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from "@sanity/astro";
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID } = loadEnv(process.env.SANITY_PROJECT_ID, process.cwd(), "");
const { WEBSITE } = loadEnv(process.env.WEBSITE, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  site: WEBSITE,

  vite: {
      plugins: [tailwindcss()]
  },

  i18n: {
      locales: ["en", "nl"],
      defaultLocale: "en",
      routing: {
          prefixDefaultLocale: false
      }
  },

  integrations: [sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: "production",
      useCdn: false, // for static builds
  })],

    server: {
      open: true
    }
});