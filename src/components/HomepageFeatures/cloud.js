import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { Card, Typography } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    head: 'home_page.edition_cloud',
    title: 'home_page.get_started',
    description: 'feature.description.get_started',
    href: 'install-ai-unlimited/',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.sample_use_cases',
    description: 'feature.description.sample_use_cases',
    href: '/ai-unlimited/explore-and-analyze-data/use-cases/',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.whats_new',
    description: 'feature.description.whats_new',
    href: '/ai-unlimited/whats-new/',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.explore_data',
    description: 'feature.description.explore_data',
    href: '/ai-unlimited/explore-and-analyze-data/',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.analytic_functions',
    description: 'feature.description.analytic_functions',
    href: 'https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Analyzing-Your-Data',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.manage_projects',
    description: 'feature.description.manage_projects',
    href: '/ai-unlimited/manage-ai-unlimited/',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.other_resources',
    description: 'feature.description.other_resources',
    href: '/ai-unlimited/resources/',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.faq',
    description: 'feature.description.faq',
    href: '/ai-unlimited/faq/',
  },
  {
    head: 'home_page.edition_cloud',
    title: 'feature.title.glossary',
    description: 'feature.description.glossary',
    href: '/ai-unlimited/glossary/',
  },
];


function Feature({ head, title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)} style={{ '--td-web-typography-eyebrow-alignment': 'start' }}>
        <Typography scale="eyebrow">
          {translate({ message: head })}
        </Typography>
        <Heading as="h3" className={clsx(styles.marginTitle)}>{translate({ message: title })}</Heading>
        {description && <p>{translate({ message: description })}</p>}
      </div>
    </Link>
  );
}

export default function Cloud() {
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