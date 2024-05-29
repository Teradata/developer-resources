import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import QuickstartsPageCategories from '@site/src/components/QuickstartsPageCategories';
import HeroImageUrl from '@site/static/img/quickstarts-hero.png';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div className="">
          <Heading as="h1" className="hero__title">
            Getting started
          </Heading>
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
        <QuickstartsPageCategories />
      </main>
    </Layout>
  );
}
