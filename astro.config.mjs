import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'VideoShorts',
      description: 'A lightweight JavaScript library for embedding YouTube videos with lazy loading support.',
      defaultLocale: 'root',
      customCss: ['./src/styles/custom.css'],
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'pt-br': {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
        'zh-cn': {
          label: '中文',
          lang: 'zh-CN',
        },
      },
      social: {
        github: 'https://github.com/eulucastiagolt/videoshorts',
      },
      editLink: {
        baseUrl: 'https://github.com/eulucastiagolt/videoshorts-docs/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'doc' },
            { label: 'Installation', slug: 'doc/installation' },
            { label: 'Quick Start', slug: 'doc/quick-start' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            { label: 'Options', slug: 'doc/options' },
            { label: 'Styling & CSS', slug: 'doc/styling' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'Methods', slug: 'doc/api/methods' },
            { label: 'Events', slug: 'doc/api/events' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { label: 'Basic', slug: 'doc/examples/basic' },
            { label: 'Shorts', slug: 'doc/examples/shorts' },
            { label: 'Controls', slug: 'doc/examples/controls' },
            { label: 'Integration', slug: 'doc/examples/integration' },
          ],
        },
        {
          label: 'Other',
          items: [
            { label: 'License', slug: 'doc/license' },
          ],
        },
      ],
    }),
  ],
});