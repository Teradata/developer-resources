import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { Card, Typography } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'home_page.get_started',
    description: 'feature.description.get_started',
    href: 'install-ai-unlimited/',
  },
  {
    title: 'feature.title.sample_use_cases',
    description: 'feature.description.sample_use_cases',
    href: '/ai-unlimited/explore-and-analyze-data/use-cases/',
  },
  {
    title: 'feature.title.whats_new',
    description: 'feature.description.whats_new',
    href: '/ai-unlimited/whats-new/',
  },
  {
    title: 'feature.title.explore_data',
    description: 'feature.description.explore_data',
    href: '/ai-unlimited/explore-and-analyze-data/',
  },
  {
    title: 'feature.title.analytic_functions',
    description: 'feature.description.analytic_functions',
    href: 'https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Analyzing-Your-Data',
  },
  {
    title: 'feature.title.manage_projects',
    description: 'feature.description.manage_projects',
    href: '/ai-unlimited/manage-ai-unlimited/',
  },
  {
    title: 'feature.title.other_resources',
    description: 'feature.description.other_resources',
    href: '/ai-unlimited/resources/',
  },
  {
    title: 'feature.title.faq',
    description: 'feature.description.faq',
    href: '/ai-unlimited/faq/',
  },
  {
    title: 'feature.title.glossary',
    description: 'feature.description.glossary',
    href: '/ai-unlimited/glossary/',
  },
];


function Feature({ title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)}>
        <Heading as="h3">{translate({ message: title })}</Heading>
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
