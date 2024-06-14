import gettingStartedUrl from '@site/static/img/developers/Document.png';
import documentationUrl from '@site/static/img/developers/Library.png';
import downloadsUrl from '@site/static/img/developers/Download.png';
import communityUrl from '@site/static/img/developers/People.png';
import bulletUrl from '@site/static/img/developers/Bullet.png';
import externalUrl from '@site/static/img/developers/External.png';
//import DataScientist from '@site/static/img/developers/DataScientist.png';
//import DataLeader from '@site/static/img/developers/DataLeader.png';
//import Developer from '@site/static/img/developers/Developer.png';
//import businessLeader from '@site/static/img/developers/businessLeader.png';
//import dataEngineer from '@site/static/img/developers/dataEngineer.png';

export const FeatureList = [
  {
    imgBullet: bulletUrl,
    img: gettingStartedUrl,
    title: 'Getting started',
    description: 'Get quickly up to speed with Teradata Vantage. Learn about features. Find how-tos for common tasks. Explore sample source code.',
    descriptionLink:'View Getting started',
    href: 'https://quickstarts.teradata.com',
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
    title: 'Run Scripts on Vantage',
    description: 'Sometimes, you need to apply complex logic to your data that can’t be easily expressed in SQL. One option is to wrap your logic in a User Defined Function (UDF). What if you ...',
    href: '/docs/install-ai-unlimited/',
  },
  {
    img: gettingStartedUrl,
    img2: externalUrl,
    title: `Using Vantage from a Jupyter notebook`,
    description: 'In this how-to we will go through the steps for connecting to Teradata Vantage from a Jupyter notebook.',
    href: '/docs/explore-and-analyze-data/use-cases/',
  },
  {
    img: downloadsUrl,
    img2: externalUrl,
    title: `Teradata Tools and Utilities`,
    description: 'In this how-to we will go through the steps for connecting to Teradata Vantage from a Jupyter notebook.',
    href: '/docs/whats-new/',
  },
  {
    img: gettingStartedUrl,
    img2: externalUrl,
    title: `Connect to Vantage using Python`,
    description: 'This how-to demonstrates how to connect to Vantage using teradatasql Python database driver for Teradata Vantage.',
    href: '/docs/explore-and-analyze-data/use-cases/',
  },
  {
    img: downloadsUrl,
    img2: externalUrl,
    title: `Vantage Analytics Library`,
    description: 'The Vantage Analytics Library (VAL) consists of a Java XSP (a SQL generator), 2 table operators (to support the KMeans and Decision Tree algorithms) and statistical te...',
    href: '/docs/whats-new/',
  },
  {
    img: downloadsUrl,
    img2: externalUrl,
    title: `Teradata JDBC Driver`,
    description: 'The Teradata JDBC Driver enables Java applications to connect to the Teradata Database.',
    href: '/docs/whats-new/',
  }
];
