import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import gettingStartedUrl from '@site/static/img/developers/Document.png';
import documentationUrl from '@site/static/img/developers/Library.png';
import downloadsUrl from '@site/static/img/developers/Download.png';
import communityUrl from '@site/static/img/developers/People.png';
import bulletUrl from '@site/static/img/developers/Bullet.png';
import externalUrl from '@site/static/img/developers/External.png';
import teradataCommunityUrl from '@site/static/img/developers/Community.png';
import githubUrl from '@site/static/img/developers/Github.png';
import stackoverflowUrl from '@site/static/img/developers/Stackoverflow.png';
import mediumUrl from '@site/static/img/developers/Medium.png';
import DataScientist from '@site/static/img/developers/DataScientist.png'
import businessLeader from '@site/static/img/developers/businessLeader.png'
import DataLeader from '@site/static/img/developers/DataLeader.png'
import Developer from '@site/static/img/developers/Developer.png'
import dataEngineer from  '@site/static/img/developers/dataEngineer.png'
import { Tabs, Tab } from './Tabs';

//const FeatureTitle = 'Categories';
const FeatureList = [
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

const FeatureList2 = [
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
]

function Feature({ imgBullet, imgBullet2, img, title, description, href, href2, descriptionLink, descriptionLink2   }) {
  return (
    <div className={clsx('col', styles.col)}>
      <div className={clsx('', styles.card)}>
        <img src={img} alt={title} title={title}/>
        <div className={clsx(styles.pad)}>
          <Heading as="h3">{title}</Heading>
        </div>
        {description && <p>{description}</p>}
        <div className={clsx(styles.dot)}>
          <img src={imgBullet} className={clsx(styles.dotPad)}/>
          <a href={href} target='_blank' className={clsx(styles.links)}>{descriptionLink}</a>
        </div>
        <br/>
        <div className={clsx(styles.dot)}>  
          <img src={imgBullet2} className={clsx(styles.dotPad)}/>
          <a href={href2} target='_blank' className={clsx(styles.links)}>{descriptionLink2}</a>
        </div>
      </div>
    </div>
  );
}

function FeatureStayUpToDate({ img, img2, title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)}>
        <div className={clsx(styles.toppicks)}>
          <img src={img} alt={title} title={title}/>
          <img src={img2} alt={title} title={title}/>
        </div>
        <div className={styles.stayCon}>
          <Heading as="h3">{title}</Heading>
        </div>
        
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
}

export default function DevelopersHomepage() {
  return (
    <>
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <Feature {...FeatureList[0]} />
          <Feature {...FeatureList[1]} />
          <Feature {...FeatureList[2]} />
          <Feature {...FeatureList[3]} />
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col)}>
            <p className={clsx(styles.firstSubheading)}>Solutions for you</p>
            <p className={clsx(styles.secondSubheading)}>Get started with Teradata</p>
          </div>
        </div>
        <div className={clsx('row', styles.row)}>
          <div className='col'>
            <Tabs>
              <Tab label="Data Scientist">
                  <div className={styles.head}>
                    <h3>Train ML models in Vantage</h3>
                  </div>
                  <div className={styles.tabContent}>
                    <p>There are situations when you want to quickly validate a machine learning model idea. You have a model type in mind. You don’t want to operationalize with an ML pipeline just yet. You just want to test out if the relationship you had in mind exists. Also, sometimes even your production deployment doesn’t require constant relearning with MLops. In such cases, you can use Vantage Analytics Library (VAL) and multiple ML model types it supports.</p>
                  </div>
                  <div>
                    <img src={DataScientist} className={styles.image} width='498px'></img>
                  </div>
              </Tab>
              <Tab label="Data Engineer">
                  <h3>dbt with Teradata Vantage</h3>
                  <div className={styles.tabContent}>
                    <p>This tutorial demonstrates how to use dbt (Data Build Tool) with Teradata Vantage. It’s based on the original dbt Jaffle Shop tutorial. A couple of models have been adjusted to the SQL dialect supported by Vantage.</p>
                    <img src={DataLeader} width='498px'></img>
                  </div>
              </Tab>
              <Tab label="Developer">
                  <h3>Connect to Vantage using JDBC</h3>
                  <div className={styles.tabContent}>
                    <p>This how-to demonstrates how to connect to Teradata Vantage using JDBC using a sample Java application: https://github.com/Teradata/jdbc-sample-app.</p>
                    <img src={Developer} width='498px'></img>
                  </div>
              </Tab>
              <Tab label="Database Administrator">
                  <h3>Database Run large bulkloads efficiently with Teradata Parallel Transporter (TPT)</h3>
                  <div className={styles.tabContent}>
                    <p>We often have a need to move large volumes of data into Vantage. Teradata offers Teradata Parallel Transporter (TPT) utility that can efficiently load large amounts of data into Teradata Vantage. This how-to demonstrates how to use TPT. In this scenario,</p>
                    <img src={businessLeader} width='498px'></img>
                  </div>
              </Tab>
              <Tab label="IT Operations">
                  <h3>Query data stored in object storage</h3>
                  <div className={styles.tabContent}>
                    <p>Native Object Storage (NOS) is a Vantage feature that allows you to query data stored in files in object storage such as AWS S3, Google GCS, Azure Blob or on-prem implementations. It’s useful in scenarios where you want to explore data without building a</p>
                    <img src={dataEngineer} width='498px'></img>
                  </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col)}>
            <p className={clsx(styles.firstSubheading)}>Stay up to date</p>
            <p className={clsx(styles.secondSubheading)}>Top picks from Teradata</p>
          </div>
        </div>
        <div className={clsx('row', styles.row)}>
          {FeatureList2.map((props, idx) => (
            <FeatureStayUpToDate key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col)}>
            <p className={clsx(styles.secondSubheading)}>Talk to Developers where you are</p>
          </div>
        </div>
        <div className={clsx('row', styles.row)}>
          <div className='col'>
            <div className={styles.imgFoot}>
              <img src={teradataCommunityUrl} alt="Teradata Community" title="Teradata Community"/>
              <img src={mediumUrl} alt="Teradata Community" title="Teradata Community"/>
              <img src={githubUrl} alt="Teradata Community" title="Teradata Community"/>
              <img src={stackoverflowUrl} alt="Teradata Community" title="Teradata Community"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
