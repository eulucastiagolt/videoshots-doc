import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'VideoShorts',
      defaultLocale: 'pt-br',
      locales: {
        'pt-br': {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
        en: {
          label: 'English',
          lang: 'en',
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
            { label: 'Visão Geral', slug: '', translations: { en: 'Overview', 'zh-CN': '概述' } },
            { label: 'Instalação', slug: 'installation', translations: { en: 'Installation', 'zh-CN': '安装' } },
            { label: 'Início Rápido', slug: 'quick-start', translations: { en: 'Quick Start', 'zh-CN': '快速开始' } },
          ],
        },
        {
          label: 'Configuração',
          translations: {
            en: 'Configuration',
            'zh-CN': '配置',
          },
          items: [
            { label: 'Opções', slug: 'options', translations: { en: 'Options', 'zh-CN': '选项' } },
            { label: 'Estilos e CSS', slug: 'styling', translations: { en: 'Styling & CSS', 'zh-CN': '样式和CSS' } },
          ],
        },
        {
          label: 'API',
          translations: {
            en: 'API',
            'zh-CN': 'API',
          },
          items: [
            { label: 'Métodos', slug: 'api/methods', translations: { en: 'Methods', 'zh-CN': '方法' } },
            { label: 'Eventos', slug: 'api/events', translations: { en: 'Events', 'zh-CN': '事件' } },
          ],
        },
        {
          label: 'Exemplos',
          translations: {
            en: 'Examples',
            'zh-CN': '示例',
          },
          items: [
            { label: 'Básico', slug: 'examples/basic', translations: { en: 'Basic', 'zh-CN': '基础' } },
            { label: 'Shorts', slug: 'examples/shorts', translations: { en: 'Shorts', 'zh-CN': '短视频' } },
            { label: 'Controles', slug: 'examples/controls', translations: { en: 'Controls', 'zh-CN': '控制' } },
          ],
        },
        {
          label: 'Outros',
          translations: {
            en: 'Other',
            'zh-CN': '其他',
          },
          items: [
            { label: 'Licença', slug: 'license', translations: { en: 'License', 'zh-CN': '许可证' } },
          ],
        },
      ],
    }),
  ],
});
