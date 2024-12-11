import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { Typography } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    head: 'home_page.edition_ms_fabric',
    title: 'home_page.get_started',
    description: 'home_page.description.get_started',
    href: '/ai-unlimited/fabric/get-started/',
  },
  {
    head: 'home_page.edition_ms_fabric',
    title: 'home_page.ms_fabric_use_case',
    description: 'home_page.description.use_cases',
    href: '/ai-unlimited/fabric/first-use-case/',
  },
  {
    head: 'home_page.edition_ms_fabric',
    title: 'home_page.ms_fabric_analytic_function',
    description: 'home_page.description.analytic_function',
    href: '/ai-unlimited/fabric/in-db-functions/',
  },
];


function Feature({ head, title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)} style={{ '--td-web-typography-eyebrow-alignment': 'start' }}>
        <Typography scale="eyebrow">
          {translate({ message: head })}
        </Typography>
        <Heading as="h3" className={clsx(styles.m)}>{translate({ message: title })}</Heading>
        {description && <p>{translate({ message: description })}</p>}
      </div>
    </Link>
  );
}

export default function MicrosoftFabric() {
  return (
    <section className={styles.features}>
        <div className={clsx('row', styles.row)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
    </section>
  );
}
