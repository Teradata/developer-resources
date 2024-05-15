import config from './docusaurus.config';

/** @type {import('@docusaurus/types').Config} */
const prConfig = {
  ...config,
  noIndex: true,
};

export default prConfig;
