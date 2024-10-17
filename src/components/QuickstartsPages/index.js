import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { Typography } from '@teradata-web/react-components';
import { PossibleBanner } from '../HomepageFeatures';
import { translate } from '@docusaurus/Translate';

const FeatureTitle = translate({ message: 'home_page.categories' });
const Guides = [
  {
    img: 'memory',
    title: translate({ message: 'quickstarts.gs_w_ai_unlimited_title' }),
    description: translate({ message: 'quickstarts.gs_w_ai_unlimited_text' }),
    href: '/ai-unlimited/install-ai-unlimited/',
  },
  {
    img: 'memory',
    title: translate({ message: 'quickstarts.deploy_ai_unlimited_title' }),
    description: translate({ message: 'quickstarts.deploy_ai_unlimited_text' }),
    href: '/ai-unlimited/resources/quickstart/run-ai-unlimited-jupyterlab-docker/',
  },
  {
    img: 'memory',
    title: translate({ message: 'quickstarts.deploy_ai_unlimited_aws_title' }),
    description: translate({ message: 'quickstarts.deploy_ai_unlimited_aws_text' }),
    href: '/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console/',
  }
];
const FeatureList = [
  {
    title: translate({ message: 'quickstarts.introduction' }),
    description: translate({ message: 'quickstarts.introduction_description' }),
    href: '/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts/',
  },
  {
    title: translate({ message: 'quickstarts.get_access_vantage' }),
    description: translate({ message: 'quickstarts.get_access_vantage_description' }),
    href: '/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware/',
  },
  {
    title: translate({ message: 'quickstarts.connect_to_vantage' }),
    description: translate({ message: 'quickstarts.connect_to_vantage_description' }),
    href: '/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2/',
  },
  {
    title: translate({ message: 'quickstarts.manage_data' }),
    description: translate({ message: 'quickstarts.manage_data_description' }),
    href: '/quickstarts/manage-data/nos/',
  },
  {
    title: translate({ message: 'quickstarts.connect_apps' }),
    description: translate({ message: 'quickstarts.connect_apps_descrip' }),
    href: '/quickstarts/create-applications/jdbc/',
  },
  {
    title: translate({ message: 'quickstarts.analyze_data' }),
    description: translate({ message: 'quickstarts.analyze_data_descrip' }),
    href: '/quickstarts/analyze-data/jupyter/',
  },
  {
    title: translate({ message: 'quickstarts.td_ai_unlimited' }),
    description: translate({ message: 'quickstarts.td_ai_unlimited_descrip' }),
    href: '/ai-unlimited/',
  },
  {
    title: translate({ message: 'quickstarts.vantageCloud_lake' }),
    description: translate({ message: 'quickstarts.vantageCloud_lake_descrip' }),
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
            <Typography scale="headline2">
              {translate({ message: 'quickstarts.featured_guides' })}
            </Typography>
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
