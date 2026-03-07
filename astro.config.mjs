import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'VideoShorts',
      defaultLocale: 'en',
      locales: {
        en: {
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
          label: 'Introdução',
          translations: {
            en: 'Getting Started',
            'zh-CN': '开始使用',
          },
          items: [
            { label: 'Visão Geral', slug: 'doc', translations: { en: 'Overview', 'zh-CN': '概述' } },
            { label: 'Instalação', slug: 'doc/installation', translations: { en: 'Installation', 'zh-CN': '安装' } },
            { label: 'Início Rápido', slug: 'doc/quick-start', translations: { en: 'Quick Start', 'zh-CN': '快速开始' } },
          ],
        },
        {
          label: 'Configuração',
          translations: {
            en: 'Configuration',
            'zh-CN': '配置',
          },
          items: [
            { label: 'Opções', slug: 'doc/options', translations: { en: 'Options', 'zh-CN': '选项' } },
            { label: 'Estilos e CSS', slug: 'doc/styling', translations: { en: 'Styling & CSS', 'zh-CN': '样式和CSS' } },
          ],
        },
        {
          label: 'API',
          translations: {
            en: 'API',
            'zh-CN': 'API',
          },
          items: [
            { label: 'Métodos', slug: 'doc/api/methods', translations: { en: 'Methods', 'zh-CN': '方法' } },
            { label: 'Eventos', slug: 'doc/api/events', translations: { en: 'Events', 'zh-CN': '事件' } },
          ],
        },
        {
          label: 'Exemplos',
          translations: {
            en: 'Examples',
            'zh-CN': '示例',
          },
          items: [
            { label: 'Básico', slug: 'doc/examples/basic', translations: { en: 'Basic', 'zh-CN': '基础' } },
            { label: 'Shorts', slug: 'doc/examples/shorts', translations: { en: 'Shorts', 'zh-CN': '短视频' } },
            { label: 'Controles', slug: 'doc/examples/controls', translations: { en: 'Controls', 'zh-CN': '控制' } },
          ],
        },
        {
          label: 'Outros',
          translations: {
            en: 'Other',
            'zh-CN': '其他',
          },
          items: [
            { label: 'Licença', slug: 'doc/license', translations: { en: 'License', 'zh-CN': '许可证' } },
          ],
        },
      ],
    }),
  ],
});
