import config from './docusaurus.config.js';
import headerItems from './src/config/header.navitems.js';
import footerItems from './src/config/header.navitems.js';

/** @type {import('@docusaurus/types').Config} */
const prConfig = {
  ...config,
  noIndex: true,
  baseUrl: `${config.baseUrl}/pr-preview/pr-${process.env.GH_PR_NUMBER}`,
};

// Modify the header items to include the PR number
if (prConfig.themeConfig) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en';
  prConfig.themeConfig.navItems = headerItems(prConfig.baseUrl, currentLocale);
  prConfig.themeConfig.footerItems = footerItems(currentLocale);
}

export default prConfig;
