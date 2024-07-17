import gettingStartedUrl from '@site/static/img/developers/article.png';
import documentationUrl from '@site/static/img/developers/Library.png';
import downloadsUrl from '@site/static/img/developers/Download.png';
import communityUrl from '@site/static/img/developers/People.png';
import bulletUrl from '@site/static/img/developers/Bullet.png';
import externalUrl from '@site/static/img/developers/External.png';

export const FeatureList = [
  {
    imgBullet: bulletUrl,
    img: gettingStartedUrl,
    title: 'Getting started',
    description: 'Get quickly up to speed with Teradata Vantage. Learn about features. Find how-tos for common tasks. Explore sample source code.',
    descriptionLink:'View Getting started',
    href: '/quickstarts/',
  },
  {
    imgBullet: bulletUrl,
    img: documentationUrl,
    title: `Documentation`,
    description: 'Access Vantage Documentation for VantageCloud Enterprise, VantageCore VMware and VantageCore IntelliFlex.',
    descriptionLink:'View Lake docs',
    href: 'https://docs.teradata.com/p/VantageCloud/Lake',
    imgBullet2:bulletUrl,
    descriptionLink2: 'View all Teradata docs',
    href2: 'https://docs.teradata.com/',
  },
  {
    imgBullet: bulletUrl,
    img: downloadsUrl,
    title: `Downloads`,
    description: 'Find publicly available downloads from Teradata. Browse by category or select one of the popular downloads below.',
    descriptionLink:'View Downloads',
    href: 'https://downloads.teradata.com/',
    descriptionLink2:''
  },
  {
    imgBullet: bulletUrl,
    img: communityUrl,
    title: 'Community',
    description: 'Recent Community Blogs. The best minds from Teradata, our partners, and customers blog about relevant topics and features.',
    descriptionLink:'View Community',
    href: 'https://support.teradata.com/community',
    descriptionLink2:''
  }
];

export const FeatureList2 = [
  {
    img: gettingStartedUrl,
    img2: externalUrl,
    title: 'Explore Vantage AI/ML features',
    description: 'Get a free hands-on demo environment to explore Teradata VantageCloud’s ClearScape Analytics™',
    href: 'https://www.teradata.com/getting-started/demos/clearscape-analytics',
  },
  {
    img: gettingStartedUrl,
    img2: '',
    title: `Use dbt with Teradata Vantage`,
    description: 'Learn how to use dbt, a leading ELT tool, with Teradata Vantage.',
    href: '/quickstarts/manage-data/dbt/',
  },
  {
    img: downloadsUrl,
    img2: '',
    title: `Query data in object storage`,
    description: 'Learn how to analyze data stored in object storage using SQL.',
    href: '/quickstarts/manage-data/nos/',
  },
  {
    img: gettingStartedUrl,
    img2: '',
    title: `Use Airbyte to load data to Vantage`,
    description: 'Use Airbyte ELT tool to load data from your applications and databases into VantageCloud.',
    href: '/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage/',
  },
  {
    img: downloadsUrl,
    img2: '',
    title: `Getting Started with Teradata ModelOps`,
    description: 'In the tutorial, you will be able to create a new project in ModelOps, upload the required data to Vantage, and track the full lifecycle.',
    href: '/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git/',
  },
  {
    img: downloadsUrl,
    img2: '',
    title: `Connect to Vantage using JDBC`,
    description: 'The JDBC Driver allows you to connect to the Teradata database from external applications.',
    href: '/quickstarts/create-applications/jdbc/',
  }
];