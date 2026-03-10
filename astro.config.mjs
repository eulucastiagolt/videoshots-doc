import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'VideoShorts',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'pt-br': {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
        zh: {
          label: '中文',
          lang: 'zh-CN',
        },
      },
      social: {
        github: 'https://github.com/eulucastiagolt/videoshorts',
      },
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