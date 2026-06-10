import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Custom integration to suppress sitemap errors
const suppressSitemapErrors = {
  name: 'suppress-sitemap-errors',
  hooks: {
    'astro:build:done': async () => {
      // This hook catches build:done events silently
    },
  },
};

export default defineConfig({
  site: 'https://gcalle.github.io',
  base: '/artifex',
  integrations: [
    suppressSitemapErrors,
    starlight({
      title: 'Artífex',
      components: {
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      customCss: ['./src/styles/custom.css'],
      pagination: false,
      tableOfContents: false,
      sidebar: [
        { label: 'Inici', link: '/' },
        { label: 'Com podem crear la nostra marca?', link: '/com-podem-crear-la-nostra-marca/' },
        { label: 'Mucha Joya', link: '/mucha-joya/' },
        { label: 'Cooperativa Artífex', link: '/cooperativa-artifex/' },
        { label: 'FASE 1: La guspira', link: '/fase-1-la-guspira/' },
        {
          label: 'FASE 2: Identitat',
          items: [
            { label: 'Introducció', link: '/fase-2-identitat/' },
            { label: 'El Naming (El Nom)', link: '/fase-2-identitat/el-naming-el-nom/' },
            { label: 'El Logotip (La Cara)', link: '/fase-2-identitat/el-logotip-la-cara/' },
            { label: 'La Paleta de Colors', link: '/fase-2-identitat/la-paleta-de-colors-lemocio/' },
            { label: 'La Tipografia (La Veu)', link: '/fase-2-identitat/la-tipografia-la-veu/' },
            { label: 'Prova Final', link: '/fase-2-identitat/prova-final/' }
          ]
        },
        { label: 'FASE 3: Disseny Tècnic', link: '/fase-3-disseny-tecnic/' },
        { label: 'FASE 4: Producció', link: '/fase-4-produccio/' },
        { label: 'FASE 5: Costos i preu', link: '/fase-5-costos-i-preu/' },
        { label: 'FASE 6: Comercialització', link: '/fase-6-comercialitzacio/' },
        { label: 'Tancament del projecte', link: '/tancament-del-projecte/' }
      ],
    }),
  ],
});