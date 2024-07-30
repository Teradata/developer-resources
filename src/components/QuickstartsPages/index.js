import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { Typography } from '@teradata-web/react-components';
//import aiml from '@site/static/img/quickstarts/AI-ML.png';

const FeatureTitle = 'Categories';
const Guides = [
  {
    img: 'memory',
    title: `Getting started with Teradata AI Unlimited`,
    description: 'See what AI Unlimited includes, prerequisites you need, and installation how-tos.',
    href: '/ai-unlimited/install-ai-unlimited/',
  },
  {
    img: 'memory',
    title: 'Deploy Teradata AI Unlimited locally using Docker',
    description: `You'll use Docker Compose to run the AI Unlimited manager and JupyterLab, with the AI Unlimited Jupyter Kernel, locally in containers.`,
    href: '/ai-unlimited/resources/quickstart/run-ai-unlimited-jupyterlab-docker/',
  },
  {
    img: 'memory',
    title: 'Deploy Teradata AI Unlimited on AWS',
    description: `The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for setup.`,
    href: '/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console/',
  }
];
const FeatureList = [
  {
    title: `Introduction`,
    description: 'Teradata Vantage Engine Architecture and Concepts.',
    href: '/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts/',
  },
  {
    title: 'Get access to Vantage',
    description: 'Run Vantage Express on VMware, VirtualBox and UTM.',
    href: '/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware/',
  },
  {
    title: 'Connect to Vantage',
    description: 'Use Teradata Studio/Express on Apple Mac M1/M2.',
    href: '/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2/',
  },
  {
    title: 'Manage data',
    description: 'Query data stored in object storage.',
    href: '/quickstarts/manage-data/nos/',
  },
  {
    title: 'Connect applications',
    description: 'Connect to Vantage using JDBC, python and Mule service.',
    href: '/quickstarts/create-applications/jdbc/',
  },
  {
    title: 'Analyze data',
    description: 'Use Vantage from a Jupyter notebook.',
    href: '/quickstarts/analyze-data/jupyter/',
  },
  {
    title: 'Teradata AI Unlimited',
    description: 'See what AI Unlimited includes, prerequisites you need, and installation how-tos.',
    href: '/ai-unlimited/',
  },
  {
    title: 'VantageCloud Lake',
    description: `Teradata VantageCloud Lake is Teradata's next-generation, cloud-native analytics and data platform.`,
    href: '/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake/',
  },
];


function Feature1({ img, title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col, styles.d)}>
      <div className={clsx('doc-card', styles.card, styles.cardHeigth)}>
        <span className={clsx('material-symbols-outlined', styles.symbols)}>{img}</span>
        <Heading as="h3">{title}</Heading>
        {<p className={clsx(styles.description)}>{description}</p>}
      </div>
    </Link>
  );
}

function Feature2({ title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col, styles.d)}>
      <div className={clsx('doc-card', styles.card, styles.cardHeigth)}>
        <Heading as="h3">{title}</Heading>
        {<p className={clsx(styles.description)}>{description}</p>}
      </div>
    </Link>
  );
}

export default function Categories() {
  return (
    <>
      <section className={clsx(styles.features, styles.fGuides)}>
        <div className={clsx('container', styles.container)}>
            <br/>
            <Typography scale="headline2">Featured guides</Typography>
            <br/><br/>
            <div className={clsx('row', styles.row)}> 
            {Guides.map((props, idx) => (
              <Feature1 key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.features}>
        <div className={clsx('container', styles.container)}>
          <br/>
          <br/>
          <Typography scale="headline2">{FeatureTitle}</Typography>
          <br/>
          <div className={clsx('row', styles.row)}>
            {FeatureList.map((props, idx) => (
              <Feature2 key={idx} {...props} />
            ))}
          </div>
          <br/><br/>
        </div>
      </section>
    </>
  );
}
