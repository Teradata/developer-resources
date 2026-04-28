import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { Typography } from '@teradata-web/react-components';
import styles from '../HomepageFeatures/styles.module.css';

const FeatureList = [
  {
    title: 'Why the Cookbook',
    description: 'Understand the vision: moving from notebooks to production. Learn the repository structure, server factory pattern, and LLM providers.',
    href: '/agent-cookbook/why-the-cookbook/',
  },
  {
    title: 'Running the Recipes',
    description: 'Environment setup, agent server architecture, run the data analyst recipe, and expand with your own agents.',
    href: '/agent-cookbook/running-the-recipes/',
  },
  {
    title: 'FAQ',
    description: 'Common questions, troubleshooting, architecture deep dives, and quick reference answers.',
    href: '/agent-cookbook/faq/',
  },
];

function Feature({ title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)} style={{ '--td-web-typography-eyebrow-alignment': 'start' }}>
        <Heading as="h3" className={clsx(styles.marginTitle)}>{title}</Heading>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
}

export default function AgentCookbookFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col2)}>
            <Typography scale="eyebrow">
              Explore Agent Recipes
            </Typography>
            
            <p className={clsx(styles.secondSubheading, styles.eyebrow)}>
              <Typography scale="headline2">
                Start Building Your Agent
              </Typography>
            </p>
          </div>
        </div>
        <div className={clsx('row', styles.row)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
