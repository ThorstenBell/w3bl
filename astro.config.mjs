// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://w3bl.com',
    vite: {
        plugins: [tailwindcss()]
    },
    i18n: {
        locales: ["en", "nl"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false
        }
    }
});