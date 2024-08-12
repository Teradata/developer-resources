import config from './docusaurus.config.js';
import headerItems from './src/config/header.navitems.js';

// Remove the Google Analytics tracking ID from the PR preview
delete config.presets[0][1].gtag

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
}

export default prConfig;
