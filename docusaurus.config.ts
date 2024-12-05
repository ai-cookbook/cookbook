import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isRsdoctor = false;

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://ai-cookbook.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ai-cookbook', // Usually your GitHub org/user name.
  projectName: 'cookbook', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ai-cookbook/cookbook/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ai-cookbook/cookbook/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AI Cookbook',
      logo: {
        alt: 'AI Cookbook Logo',
        src: 'img/logo.svg',
        href: '/',
      },
      items: [
        {to: '/showcase', label: 'GenAI маркетплейс', position: 'left'},
        {
          type: 'dropdown',
          label: 'Разработчикам',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'adapterSidebar',
              label: 'OpenAI Адаптер',
            },
            {
              type: 'docSidebar',
              sidebarId: 'guidesSidebar',
              label: 'Руководства @ Yandex Cloud',
            },
            {
              type: 'docSidebar',
              sidebarId: 'advancedSidebar',
              label: 'Продвинутые инструменты',
            },
            {
              type: 'docSidebar',
              sidebarId: 'appsSidebar',
              label: 'Self-hosted приложения',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'bizSidebar',
          label: 'Бизнесу',
        },
        {
          type: 'docSidebar',
          sidebarId: 'promptsSidebar',
          position: 'left',
          label: 'Промптбук',
        },
        {
          href: 'https://t.me/aicookbookbot',
          label: 'Мне нужна помощь с деплоем',
          position: 'right',
        },
        {
          //href: 'https://github.com/ai-cookbook/cookbook',
          href: 'https://github.com/ai-cookbook/cookbook',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'GenAI маркетплейс',
              to: '/showcase',
            },
            {
              label: 'Промптбук',
              to: 'docs/prompts/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ai-cookbook/cookbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Cookbook Ru`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-userprompt-line',
          line: 'user-highlight-line',
          block: {start: 'user-highlight-start', end: 'user-highlight-end'},
        },
        {
          className: 'code-block-assistant-line',
          line: 'assistant-highlight-line',
          block: {start: 'assistant-highlight-start', end: 'assistant-highlight-end'},
        },
        {
          className: 'code-block-assistant-func-line',
          line: 'assistant-func-highlight-line',
          block: {start: 'assistant-func-highlight-start', end: 'assistant-func-highlight-end'},
        },
        {
          className: 'code-block-system-line',
          line: 'system-highlight-line',
          block: {start: 'system-highlight-start', end: 'system-highlight-end'},
        },
      ],
    },
    plugins: [
      isRsdoctor && [
        'rsdoctor',
        {
          rsdoctorOptions: {
            disableTOSUpload: true,
            supports: {
              // https://rsdoctor.dev/config/options/options#generatetilegraph
              generateTileGraph: true,
            },
            linter: {
              // See https://rsdoctor.dev/guide/usage/rule-config
              rules: {
                'ecma-version-check': 'off',
                'duplicate-package': 'off',
              },
            },
          },
        },
      ],
      
      '@docusaurus/theme-mermaid',
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
