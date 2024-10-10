// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config.cjs';
import headerItems from './src/config/header.navitems.js';
import fs from 'fs';
import footerItems from './src/config/footer.navItems.js';

const baseUrl = '';
const projectName = 'ai-unlimited-docs';

const getCurrentLocale = () => process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en';

/**
 * This is a workaround for translations of site title and tagline.
 * Docusaurus does not support translations for title and tagline in site config yet.
 * Refer to: https://github.com/facebook/docusaurus/issues/4542 for details
 */
const getTranslationFromFile = (filePath, key) => {
  const codeJson = fs.readFileSync(filePath, 'utf8');
  const translations = JSON.parse(codeJson);
  return translations[key].message;
};

const getLocalizedTranslation = (key) => {
  const currentLocale = getCurrentLocale();
  const filePath = `./i18n/${currentLocale}/code.json`;

  try {
    return getTranslationFromFile(filePath, key);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File not found, use 'en' as the default locale
      return getTranslationFromFile('./i18n/en/code.json', key);
    } else {
      throw error;
    }
  }
};

const allowedUrls = [
  'https://www.teradata.com',
  'https://*.teradata.com',
  'https://avatars.githubusercontent.com',
  'https://github.com',
  'https://kit.fontawesome.com/',
  'https://ka-f.fontawesome.com/',
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/',
  'https://www.google-analytics.com/',
  'https://analytics.google.com/',
  'https://www.googletagmanager.com/',
  'https://td.doubleclick.net/',
  'https://www.youtube.com/',
  'https://*.algolia.net/',
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: getLocalizedTranslation('developer_home_page.title'),
  tagline: getLocalizedTranslation('developer_home_page.tagline'),
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://developers.teradata.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'teradata', // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: true,
  staticDirectories: [
    'static',
    'quickstarts/other-integrations/attachments',
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content: `default-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: ${allowedUrls.join(
          ' '
        )};`,
      },
    },
    {
      // Load font awesome icons
      tagName: 'script',
      attributes: {
        defer: 'true',
        type: 'text/partytown',
        src: 'https://kit.fontawesome.com/17a35e44e3.js',
        crossorigin: 'anonymous',
      },
    },
    {
      // Add Celebrus script
      tagName: 'script',
      attributes: {
        defer: 'true',
        type: 'text/partytown',
        src: 'https://www.teradata.com/js/Celebrus/bsci.js',
        async: 'true',
      },
    },
    {
      tagName: 'script',
      attributes: {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-928NX0S21B',
        async: 'true',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/partytown',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-928NX0S21B');
        `,
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'ko', 'ja'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  // Markdown features configuration
  markdown: {
    mermaid: true,
  },

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'releases',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'releases',
        blogSidebarTitle: 'All Releases',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './releases',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'quickstarts',
        path: 'quickstarts',
        routeBasePath: 'quickstarts',
        sidebarPath: './sidebars.js',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'ai-unlimited',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: 'whatsnew',
          editUrl: `https://github.com/teradata/${projectName}/tree/main`,
        },
        theme: {
          customCss: [
            './node_modules/@covalent/tokens/index.css',
            './src/css/custom.css',
          ],
        },
        gtag: {
          trackingID: 'G-928NX0S21B',
        },
      }),
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'apis/data-labs.yaml',
            route: '/api/teradata_datalabs',
          },
          {
            spec: 'apis/query-service.yaml',
            route: '/api/teradata_query_service',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          primaryColor: '#3053f4',
        },
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/teradata-logo-social.png',
      metadata: [{ name: 'keywords', content: 'Teradata, AI Unlimited' }],
      algolia: {
        appId: 'FKCGWXPUTX',
        apiKey: '72dfc486e67f40cf44879ef55fcdd88d',
        indexName: 'teradataio',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'docker'],
      },
    }),
};

// Add header items to the themeConfig with the correct baseUrl
if (config.themeConfig) {
  config.themeConfig.navItems = headerItems(config.baseUrl, getCurrentLocale());
  config.themeConfig.footerItems = footerItems(getCurrentLocale());
}

export default config;
