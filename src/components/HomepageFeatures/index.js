import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureTitle = 'Categories';
const FeatureList = [
  {
    title: 'The freedom to innovate is now as limitless as your imagination',
    description: (
      <>
        Discover faster, easier, and more cost-effective AI innovation with
        Teradata AI Unlimited, our serverless AI/ML engine in the cloud, now
        available in private preview through Azure Marketplace.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Bring the power of Teradata's industry-leading ClearScape Analytics
        capabilities to a low-cost environment that maximizes exploration and
        discovery.
      </>
    ),
  },
  {
    title: 'AI Unlimited on Microsoft Azure and Fabric Marketplace',
    description: (
      <>
        With high-performance compute and in-engine analytics, Teradata AI
        Unlimited offers incredible new use cases, all securely and natively
        integrated into the Microsoft ecosystem.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.col)}>
      <div className={styles.card}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
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
