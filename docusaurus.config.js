// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config.cjs';


const baseUrl = '/td-ai-unlimited-docs';
const projectName = 'td-ai-unlimited-docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Teradata AI Unlimited',
  tagline: 'A scalable, serverless compute engine in any cloud.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://owilliams320.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'teradata', // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https://avatars.githubusercontent.com https://github.com https://kit.fontawesome.com/ https://ka-f.fontawesome.com/;",
      },
    },
    {
      // Load font awesome icons
      tagName: 'script',
      attributes: {
        src: 'https://kit.fontawesome.com/17a35e44e3.js',
        crossorigin: 'anonymous',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'ka', 'ja',],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
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
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/owilliams320/${projectName}/tree/main`,
          editLocalizedFiles: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: 'whatsnew',
          editUrl: `https://github.com/owilliams320/${projectName}/tree/main`,
        },
        theme: {
          customCss: ['./node_modules/@covalent/tokens/index.css', './src/css/custom.css'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/teradata-logo-social.png',
      metadata: [{ name: 'keywords', content: 'Teradata, AI Unlimited' }],
      navbar: {
        title: 'Developers',
        logo: {
          alt: 'Teradata logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/whatsnew', label: "What's new", position: 'left' },
          { to: '/releases', label: 'Releases', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Teradata/ai-unlimited',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      navItems: {
        title: 'Developers',
        navItems: [
          {
            href: 'https://quickstarts.teradata.com/',
            label: 'Getting started',
          },
          {
            label: 'Docs',
            active: true,
            navItems: [
              {
                label: 'VantageCloud Lake Documentation',
                href: 'https://docs.teradata.com/p/VantageCloud/Lake',
              },
              {
                label: 'AI Unlimited',
                href: baseUrl,
                active: true,
              },
              {
                label: 'All Documentation',
                href: 'https://docs.teradata.com/',
              },
            ],
          },
          {
            href: 'https://downloads.teradata.com/',
            label: 'Downloads',
          },
          {
            label: 'Community',
            navItems: [
              {
                label: 'Teradata Community',
                href: 'https://support.teradata.com/community',
              },
              {
                label: 'Technical Medium Blogs',
                href: 'https://medium.com/teradata',
                external: true,
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Teradata',
                external: true,
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/teradata',
                external: true,
              },
            ],
          },
        ],
        languages: [
          {
            label: 'Global',
            value: '',
          },
          {
            label: 'Duestshcland',
            value: 'de',
          },
          {
            label: 'France',
            value: 'fr',
          },
          {
            label: '日本',
            value: 'ja',
          },
          {
            label: '대한민국',
            value: 'ka',
          },
        ],
      },
      footerItems: {
        links: [
          {
            title: 'How we help',
            items: [
              {
                label: 'Roles',
                href: 'https://www.teradata.com/how-we-help',
              },
              {
                label: 'Industries',
                href: 'https://www.teradata.com/industries',
              },
              {
                label: 'Partners',
                href: 'https://www.teradata.com/partners',
              },
              {
                label: 'Partner registration',
                external: true,
                href: 'https://www.teradata.com/getattachment/49d347ac-d544-4a6c-9db3-27c9cd2d5afd/new-user-registration-instructions-for-td-partner-community.pdf?lang=en-us',
              },
              {
                label: 'Partner portal login',
                external: true,
                href: 'https://teradata.my.site.com/teradataPRM/s/login/',
              },
              {
                label: 'Success stories',
                href: 'https://www.teradata.com/customers',
              },
            ],
          },
          {
            title: 'Our platform',
            items: [
              {
                label: 'Platform',
                href: 'https://www.teradata.com/platform',
              },
              {
                label: 'VantageCloud',
                href: 'https://www.teradata.com/platform/vantagecloud',
              },
              {
                label: 'ClearScape Analytics',
                href: 'https://www.teradata.com/platform/clearscape-analytics',
              },
              {
                label: 'Unleash AI Innovation',
                href: 'https://www.teradata.com/platform/ai-ml',
              },
              {
                label: 'Workloads',
                href: 'https://www.teradata.com/platform/workloads',
              },
              {
                label: 'Deployment',
                href: 'https://www.teradata.com/platform/deployment',
              },
            ],
          },
          {
            title: 'Getting started',
            items: [
              {
                label: 'Pricing',
                href: 'https://www.teradata.com/getting-started/pricing',
              },
              {
                label: 'Demos',
                href: 'https://www.teradata.com/getting-started/demos',
              },
              {
                label: 'Modernization workshop',
                href: 'https://www.teradata.com/getting-started/modernization-workshop',
              },
              {
                label: 'Executive Briefing Center',
                href: 'https://www.teradata.com/getting-started/executive-briefing-center',
              },
              {
                label: 'Events',
                href: 'https://www.teradata.com/events',
              },
              {
                label: 'Learning',
                href: 'https://www.teradata.com/university',
              },
            ],
          },
          {
            title: 'Insights',
            items: [
              {
                label: 'AI/ML',
                href: 'https://www.teradata.com/insights/ai-and-machine-learning',
              },
              {
                label: 'Cloud data analytics',
                href: 'https://www.teradata.com/insights/cloud-data-analytics',
              },
              {
                label: 'Data architecture',
                href: 'https://www.teradata.com/insights/data-architecture',
              },
              {
                label: 'Data platform',
                href: 'https://www.teradata.com/insights/data-platform',
              },
              {
                label: 'Data security',
                href: 'https://www.teradata.com/insights/data-security',
              },
              {
                label: 'Glossary',
                href: 'https://www.teradata.com/glossary',
              },
            ],
          },
          {
            title: 'About us',
            items: [
              {
                label: 'Who we are',
                href: 'https://www.teradata.com/about-us',
              },
              {
                label: 'Our leadership',
                href: 'https://www.teradata.com/about-us/leadership',
              },
              {
                label: 'Newsroom',
                href: 'https://www.teradata.com/newsroom',
              },
              {
                label: 'Careers',
                external: true,
                href: 'https://careers.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
              },
              {
                label: 'Investors',
                external: true,
                href: 'https://investor.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
              },
            ],
          },
        ],
        socialLinks: {
          title: 'Social media',
          items: [
            {
              icon: 'fa-brands fa-linkedin-in',
              href: 'https://www.linkedin.com/company/teradata',
              label: 'LinkedIn',
            },
            {
              icon: 'fa-brands fa-x-twitter',
              href: 'https://twitter.com/teradata',
              label: 'Twitter',
            },
            {
              icon: 'fa-brands fa-facebook-f',
              href: 'https://www.facebook.com/Teradata',
              label: 'Facebook',
            },
            {
              icon: 'fa-brands fa-instagram',
              href: 'https://www.instagram.com/teradata/',
              label: 'Instagram',
            },
            {
              icon: 'fa-brands fa-youtube',
              href: 'https://www.youtube.com/user/teradata',
              label: 'Youtube',
            },
            {
              icon: 'fa fa-rss',
              href: 'https://www.teradata.com/rss',
              label: 'RSS',
            },
          ],
        },
        legalLinks: [
          {
            label: 'Privacy',
            href: 'https://www.teradata.com/privacy',
          },
          {
            label: 'Don’t Sell/Share My Info',
            href: 'https://www.teradata.com/privacy#do-not-sell-share',
          },
          {
            label: 'Terms of use',
            href: 'https://www.teradata.com/legal/terms-of-use',
          },
          {
            label: 'Legal',
            href: 'https://www.teradata.com/legal/legal-notice',
          },
          {
            label: 'Support Policies',
            href: 'https://www.teradata.com/product-support-policy',
          },
          {
            label: 'Tracking Consent',
            href: 'https://www.teradata.com/how-we-help#tracking-consent',
          },
        ],
        copyright: '2024 Teradata. All Rights Reserved',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/install-ai-unlimited',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/whatsnew',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Teradata/ai-unlimited',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with ❤️ by Teradata`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'docker'],
      },
    }),
};

export default config;
