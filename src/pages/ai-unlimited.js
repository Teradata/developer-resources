import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroImageUrl from '@site/static/img/hero.webp';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';
function HomepageHeader() {
  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div>
          <Heading as="h1" className="hero__title">
            <Translate id="home_page.title" />
          </Heading>
          <p className="hero__subtitle">
            <Translate id="home_page.tagline" />
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStartedButton
              )}
              to="/ai-unlimited/install-ai-unlimited"
            >
              <Translate id="home_page.get_started" />
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={HeroImageUrl}
            width="498"
            alt={translate({ message: 'home_page.hero_img_description' })}
          />
          <div className={styles.heroBlur}></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description={translate({ message: 'home_page.tagline' })}>
      <Head>
        <title>{translate({ message: 'home_page.ai_unlimited.title' })}</title>
        <meta
          property="og:title"
          content={translate({ message: 'home_page.ai_unlimited.title' })}
        />
      </Head>
      <HomepageHeader />
      <main className={styles.features}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
