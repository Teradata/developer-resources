import config from './docusaurus.config.js';
import headerItems from './src/config/header.navitems.js';
import baseHeadTags from './src/config/baseHeadTags.js';

/** @type {import('@docusaurus/types').Config} */
const prConfig = {
  ...config,
  noIndex: true,
  baseUrl: `${config.baseUrl}/pr-preview/pr-${process.env.GH_PR_NUMBER}`,
  headTags: [
    ...baseHeadTags,
  ],
};

// Modify the header items to include the PR number
if (prConfig.themeConfig) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en';
  prConfig.themeConfig.navItems = headerItems(prConfig.baseUrl, currentLocale);
}

export default prConfig;
