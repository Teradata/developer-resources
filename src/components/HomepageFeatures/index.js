import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureTitle = 'Categories';
const FeatureList = [
  {
    title: `What's new`,
    href: '/docs/whats-new/',
  },
  {
    title: 'Get started',
    href: '/docs/install-ai-unlimited/',
  },
  {
    title: 'Explore and analyze data',
    href: '/docs/explore-and-analyze-data/',
  },
  {
    title: 'Manage projects',
    href: '/docs/manage-ai-unlimited/',
  },
  {
    title: 'Other resources',
    href: '/docs/resources/',
  },
  {
    title: 'FAQ',
    href: '/docs/faq/',
  },
  {
    title: 'Glossary',
    href: '/docs/glossary/',
  },
  {
    title: 'Release notes',
    href: '/docs/release-notes/',
  },
];

function Feature({ title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)}>
        <Heading as="h3">{title}</Heading>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <h2>{FeatureTitle}</h2>
        <div className={clsx('row', styles.row)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
