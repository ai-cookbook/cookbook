import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isRsdoctor = false;

const config: Config = {
  title: 'AI Cookbook',
  tagline: 'Приложения и инструменты для AI, разработчикам и бизнесу',
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

  headTags: [
    // Скрипт Яндекс.Метрики
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(99255215, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `,
    },
    // NoScript тег для Яндекс.Метрики
    {
      tagName: 'noscript',
      attributes: {},
      innerHTML: `
        <div><img src="https://mc.yandex.ru/watch/99255215" style="position:absolute; left:-9999px;" alt="" /></div>
      `,
    },
  ],

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
      title: 'AI Cookbook β',
      logo: {
        alt: 'AI Cookbook Logo',
        src: 'img/logo.svg',
        href: '/',
      },
      
      items: [
        {
          href: '/showcase',
          label: 'Приложения',
          position: 'left',
        },
        {
          href: '/cookbook',
          label: 'Руководства',
          position: 'left',
        },
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
            {
              type: 'docSidebar',
              sidebarId: 'promptsSidebar',
              label: 'Промптбук',
            },
          ],
        },
        {
          href: '/docs/etc/contributing',
          label: 'Участие',
          position: 'right',
        },
        {
          href: 'https://t.me/aicookbookbot',
          label: 'Помощь',
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
          title: 'Ресурсы',
          items: [
            {
              label: 'О проекте',
              to: '/',
            },
            {
              label: 'Лента приложений',
              to: '/showcase',
            },
            {
              label: 'Лента руководств',
              to: '/cookbook',
            },
            {
              label: 'Документация адаптера',
              to: '/docs/adapter/',
            },
            {
              label: 'Промптбук',
              to: '/docs/prompts/',
            },
            {
              label: 'Бизнесу',
              to: '/docs/biz/',
            },
          ],
        },
        {
          title: 'Связь',
          items: [
            {
              label: 'Участие',
              href: '/docs/etc/contributing',
            },
            {
              label: 'Помощь',
              href: 'https://t.me/aicookbookbot',
            },
            {
              label: 'Сообщество',
              href: 'https://t.me/aicbcom',
            },
            {
              label: 'Статус страницы',
              href: 'https://ai-cookbook-ru.cronitorstatus.com/',
            },
          ],
        },
        {
          title: 'Ссылки',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ai-cookbook/cookbook',
            },
            {
              label: 'GitHub адаптера',
              href: 'https://github.com/ai-cookbook/openai-yandexgpt-adapter',
            },
            {
              label: 'Документация Yandex Foundational Models',
              href: 'https://cloud.yandex.ru/docs/foundation-models',
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
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/docs/biz/secondary/FC_why',
              from: '/docs/biz/FC_why',
            },
          ],
        },
      ],
      ['docusaurus-plugin-yandex-metrica', {
        counterID: '99255215',
        enableInProdOnly: false,
        alternativeCdn: true,
      }],
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
