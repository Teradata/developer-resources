// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config.cjs';
import headerItems from './src/config/header.navitems.js';
import fs from 'fs';

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
  tagline: getLocalizedTranslation('home_page.tagline'),
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

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content:
          `default-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: ${allowedUrls.join(' ')};`,
      },
    },
    {
      // Load font awesome icons
      tagName: 'script',
      attributes: {
        defer: 'true',
        src: 'https://kit.fontawesome.com/17a35e44e3.js',
        crossorigin: 'anonymous',
      },
    },
    {
      // Add Celebrus script 
       tagName: 'script',
       attributes: {
         defer: 'true',
         src: 'https://www.teradata.com/js/Celebrus/bsci.js',
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
      footerItems: {
        links: [
          {
            title: 'footer.why_teradata_title',
            items: [
              {
                label: 'footer.why_teradata',
                href: 'https://www.teradata.com/why-teradata',
              },
              {
                label: 'footer.trusted_ai',
                href: 'https://www.teradata.com/trusted-ai',
              },
              {
                label: 'footer.industries',
                href: 'https://www.teradata.com/industries',
              },
              {
                label: 'footer.partners',
                href: 'https://www.teradata.com/partners',
              },
              {
                label: 'footer.partner_registration',
                external: true,
                href: 'https://www.teradata.com/getattachment/49d347ac-d544-4a6c-9db3-27c9cd2d5afd/new-user-registration-instructions-for-td-partner-community.pdf?lang=en-us',
              },
              {
                label: 'footer.partner_portal_login',
                external: true,
                href: 'https://teradata.my.site.com/teradataPRM/s/login/',
              },
              {
                label: 'footer.solutions',
                href: 'https://www.teradata.com/solutions/business-use-cases',
              },
              {
                label: 'footer.success_stories',
                href: 'https://www.teradata.com/customers',
              },
              {
                label: 'footer.services',
                href: 'https://www.teradata.com/how-we-help/teradata-services',
              },
            ],
          },
          {
            title: 'footer.our_platform',
            items: [
              {
                label: 'footer.platform',
                href: 'https://www.teradata.com/platform',
              },
              {
                label: 'footer.vantagecloud',
                href: 'https://www.teradata.com/platform/vantagecloud',
              },
              {
                label: 'footer.clearscape_analytics',
                href: 'https://www.teradata.com/platform/clearscape-analytics',
              },
              {
                label: 'footer.unleash_ai_innovation',
                href: 'https://www.teradata.com/platform/ai-ml',
              },
              {
                label: 'footer.workloads',
                href: 'https://www.teradata.com/platform/workloads',
              },
              {
                label: 'footer.deployment',
                href: 'https://www.teradata.com/platform/deployment',
              },
            ],
          },
          {
            title: 'footer.getting_started',
            items: [
              {
                label: 'footer.pricing',
                href: 'https://www.teradata.com/getting-started/pricing',
              },
              {
                label: 'footer.demos',
                href: 'https://www.teradata.com/getting-started/demos',
              },
              {
                label: 'footer.modernization_workshop',
                href: 'https://www.teradata.com/getting-started/modernization-workshop',
              },
              {
                label: 'footer.executive_briefing_center',
                href: 'https://www.teradata.com/getting-started/executive-briefing-center',
              },
              {
                label: 'footer.events',
                href: 'https://www.teradata.com/events',
              },
              {
                label: 'footer.learning',
                href: 'https://www.teradata.com/university',
              },
            ],
          },
          {
            title: 'footer.insights',
            items: [
              {
                label: 'footer.ai_ml',
                href: 'https://www.teradata.com/insights/ai-and-machine-learning',
              },
              {
                label: 'footer.cloud_data_analytics',
                href: 'https://www.teradata.com/insights/cloud-data-analytics',
              },
              {
                label: 'footer.data_architecture',
                href: 'https://www.teradata.com/insights/data-architecture',
              },
              {
                label: 'footer.data_platform',
                href: 'https://www.teradata.com/insights/data-platform',
              },
              {
                label: 'footer.data_security',
                href: 'https://www.teradata.com/insights/data-security',
              },
              {
                label: 'footer.glossary',
                href: 'https://www.teradata.com/glossary',
              },
            ],
          },
          {
            title: 'footer.about_us',
            items: [
              {
                label: 'footer.who_we_are',
                href: 'https://www.teradata.com/about-us',
              },
              {
                label: 'footer.our_leadership',
                href: 'https://www.teradata.com/about-us/leadership',
              },
              {
                label: 'footer.newsroom',
                href: 'https://www.teradata.com/newsroom',
              },
              {
                label: 'footer.careers',
                external: true,
                href: 'https://careers.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
              },
              {
                label: 'footer.investors',
                external: true,
                href: 'https://investor.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
              },
            ],
          },
        ],
        socialLinks: {
          title: 'footer.social_media',
          items: [
            {
              icon: 'fa-brands fa-linkedin-in',
              href: 'https://www.linkedin.com/company/teradata',
              label: 'footer.social_media.linkedin',
            },
            {
              icon: 'fa-brands fa-x-twitter',
              href: 'https://twitter.com/teradata',
              label: 'footer.social_media.twitter',
            },
            {
              icon: 'fa-brands fa-facebook-f',
              href: 'https://www.facebook.com/Teradata',
              label: 'footer.social_media.facebook',
            },
            {
              icon: 'fa-brands fa-instagram',
              href: 'https://www.instagram.com/teradata/',
              label: 'footer.social_media.instagram',
            },
            {
              icon: 'fa-brands fa-youtube',
              href: 'https://www.youtube.com/user/teradata',
              label: 'footer.social_media.youtube',
            },
            {
              icon: 'fa fa-rss',
              href: 'https://www.teradata.com/rss',
              label: 'footer.social_media.rss',
            },
          ],
        },
        legalLinks: [
          {
            label: 'footer.privacy',
            href: 'https://www.teradata.com/privacy',
          },
          {
            label: 'footer.do_not_sell_share',
            href: 'https://www.teradata.com/privacy#do-not-sell-share',
          },
          {
            label: 'footer.terms_of_use',
            href: 'https://www.teradata.com/legal/terms-of-use',
          },
          {
            label: 'footer.legal',
            href: 'https://www.teradata.com/legal/legal-notice',
          },
          {
            label: 'footer.support_policy',
            href: 'https://www.teradata.com/product-support-policy',
          },
          {
            label: 'footer.tracking_consent',
            href: 'https://www.teradata.com/how-we-help#tracking-consent',
          },
        ],
        linksOfInterest: {
          title: 'footer.also_of_interest',
          items: [
            {
              label: 'footer.platform_ai_ml',
              href: 'https://www.teradata.com/platform/ai-ml',
            },
            {
              label: 'footer.big_data',
              href: 'https://www.teradata.com/solutions/big-data',
            },
            {
              label: 'footer.data_security_insights',
              href: 'https://www.teradata.com/insights/data-security',
            },
          ],
        },
        copyright: 'footer.copyright',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'docker'],
      },
    }),
};

// Add header items to the themeConfig with the correct baseUrl
if(config.themeConfig) {
  config.themeConfig.navItems = headerItems(config.baseUrl);
}

export default config;
