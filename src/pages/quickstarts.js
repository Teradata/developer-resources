import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import QuickstartsPages from '@site/src/components/QuickstartsPages';
import HeroImageUrl from '@site/static/img/quickstarts-hero.png';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { Typography } from '@teradata-web/react-components';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero--primary', styles.heroBanner, styles.ali)}>
      <div className={clsx('container', styles.container)}>
        <div >
          <Typography scale="headline1">Getting started</Typography>
          <p className="hero__subtitle">
            <Translate id="theme.tagline">
                Discover in-depth tutorials and guides about how to use Teradata Vantage from all members of the Teradata community, including employees, partners, customers.
            </Translate>
          </p>
          <p className="hero__subtitle">
            Existing customer or partner? Explore courses at <a href='https://teradata.com/University/Overview' target='_blank'>Teradata University</a>.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={HeroImageUrl} alt="Two individuals collaborate at a desk with a computer, against an abstract orange and blue backdrop." />
          <div className={styles.heroBlur}></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className={styles.features}>
        <QuickstartsPages />
      </main>
    </Layout>
  );
}
