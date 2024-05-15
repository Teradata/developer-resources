import config from './docusaurus.config';

/** @type {import('@docusaurus/types').Config} */
const prConfig = {
  ...config,
  noIndex: true,
  baseUrl: `${config.baseUrl}/pr-previews/pr-${process.env.GH_PR_NUMBER}`
};

export default prConfig;
