import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureTitle = 'Categories';
const FeatureList = [
  {
    title: 'Get started',
    description: 'See what AI Unlimited includes, prerequisites you need, and installation how-tos',
    href: '/docs/install-ai-unlimited/',
  },
  {
    title: `Sample use cases`,
    description: 'Explore ways to use AI Unlimited to expirement and innovate',
    href: '/docs/explore-and-analyze-data/use-cases/',
  },
  {
    title: `What's new`,
    description: 'Watch for new features and updates — and see what’s coming',
    href: '/docs/whats-new/',
  },
  {
    title: 'Explore and analyze data',
    description: 'Learn about AI Unlimited projects and create your first one',
    href: '/docs/explore-and-analyze-data/',
  },
  {
    title: `Analytic functions`,
    description: 'Browse and search ClearScape™ functions to use in projects',
    href: 'https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita',
  },
  {
    title: 'Manage projects',
    description: 'Learn how to manage projects or change AI Unlimited settings',
    href: '/docs/manage-ai-unlimited/',
  },
  {
    title: 'Other resources',
    description: 'Find additional installation resources, and more',
    href: '/docs/resources/',
  },
  {
    title: 'FAQ',
    description: 'Get answers to your questions',
    href: '/docs/faq/',
  },
  {
    title: 'Glossary',
    description: 'Look up AI Unlimited terminology',
    href: '/docs/glossary/',
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
