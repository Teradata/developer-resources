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
    img: gettingStartedUrl,
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
    img: gettingStartedUrl,
    img2: externalUrl,
    title: `Vantage Analytics Library`,
    description: 'The Vantage Analytics Library (VAL) consists of a Java XSP (a SQL generator), 2 table operators (to support the KMeans and Decision Tree algorithms) and statistical te...',
    href: '/docs/whats-new/',
  },
  {
    img: gettingStartedUrl,
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
        <Heading as="h3">{title}</Heading>
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

    <section>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col)}>
            <p className={clsx(styles.firstSubheading)}>Solutions for you</p>
            <p className={clsx(styles.secondSubheading)}>Get started with Teradata</p>
          </div>
        </div>
      </div>
    </section>

    <section>
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
    </>
  );
}
