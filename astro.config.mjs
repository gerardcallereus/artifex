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
      pagefind: false,
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
        { label: 'Pla personal', link: '/pla-personal/' },
        { label: 'Com podem crear la nostra marca?', link: '/com-podem-crear-la-nostra-marca/' },
        { label: 'Mucha Joya', link: '/mucha-joya/' },
        { label: 'Cooperativa Artífex', link: '/cooperativa-artifex/' },
        { label: 'FASE 1: La guspira', link: '/fase-1-la-guspira/' },
        {
          label: 'FASE 2: Identitat',
          collapsed: true,
          items: [
            { label: 'Introducció', link: '/fase-2-identitat/' },
            { label: 'El Naming', link: '/fase-2-identitat/el-naming-el-nom/' },
            { label: 'El Logotip', link: '/fase-2-identitat/el-logotip-la-cara/' },
            { label: 'Línia de productes', link: '/fase-2-identitat/linia-de-productes/' },
            { label: 'Tipografia i Paleta de colors', link: '/fase-2-identitat/tipografia-i-paleta-de-colors/' }
          ]
        },
        {
          label: 'FASE 3: Disseny Tècnic',
          collapsed: true,
          items: [
            { label: 'Introducció', link: '/fase-3-disseny-tecnic/' },
            { label: 'Disseny del logotip', link: '/fase-3-disseny-tecnic/disseny-del-logotip/' },
            { label: 'Disseny de les arracades', link: '/fase-3-disseny-tecnic/disseny-de-les-arracades/' }
          ]
        },
        { label: 'FASE 4: Producció', link: '/fase-4-produccio/' },
        { label: 'FASE 5: Costos i preu', link: '/fase-5-costos-i-preu/' },
        { label: 'FASE 6: Comercialització i Storytelling', link: '/fase-6-comercialitzacio/' },
        { label: 'Dossier de recuperació', link: '/dossier-recuperacio/' },
        { label: "Carpeta d'aprenentatge", link: '/carpeta-d-aprenentatge/' },
        { label: "Carpeta d'aprenentatge (Adaptada)", link: '/carpeta-d-aprenentatge-adaptada/' },
        { label: "Prova escrita final", link: '/prova-escrita-final/' }
      ],
    }),
  ],
});