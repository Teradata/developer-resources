import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The freedom to innovate is now as limitless as your imagination',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Discover faster, easier, and more cost-effective AI innovation with Teradata AI Unlimited, our serverless AI/ML engine in the cloud, now available in private preview through Azure Marketplace. 
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Bring the power of Teradata’s industry-leading ClearScape Analytics capabilities to a low-cost environment that maximizes exploration and discovery. 
      </>
    ),
  },
  {
    title: 'AI Unlimited on Microsoft Azure and Fabric Marketplace',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With high-performance compute and in-engine analytics, Teradata AI Unlimited offers incredible new use cases, all securely and natively integrated into the Microsoft ecosystem.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
