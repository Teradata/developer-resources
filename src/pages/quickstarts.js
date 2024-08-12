import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import QuickstartsPages from '@site/src/components/QuickstartsPages';
import HeroImageUrl from '@site/static/img/quickstarts-hero.png';
import { translate } from '@docusaurus/Translate';
import styles from './index.module.css';
import { Typography } from '@teradata-web/react-components';

function HomepageHeader() {
  return (
    <header className={clsx('hero--primary', styles.heroBanner, styles.ali)}>
      <div className={clsx('container', styles.container)}>
        <div >
          <Typography scale="headline1">{translate({ message: 'developers.getting_started_title' })}</Typography>
          <br/>
          <p className="hero__subtitle">
            {translate({ message: 'quickstarts.tagline' })}
          </p>
          <p className="hero__subtitle">
            {translate({ message: 'quickstarts.tagline_2' })} 
              <Link href='https://teradata.com/University/Overview' target='_blank'>
                {translate({ message: 'quickstarts.teradata_university' })} 
              </Link>.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img 
            src={HeroImageUrl} 
            alt= {translate({ message: 'quickstarts.alt-img-banner' })} 
            className={styles.imgW}
          />
          <div className={styles.heroBlur}></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
      <title>Teradata Getting Started</title>
        <meta name="description" content="Get quickly up to speed with Teradata Vantage. Learn about features. Find how-tos for common tasks. Explore sample source code." />
        <link rel="preconnect" href="https://teradata.com" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickstarts.teradata.com/" />
        <meta property="og:title" content="Teradata Getting Started" />
        <meta property="og:description" content="Get quickly up to speed with Teradata Vantage. Learn about features. Find how-tos for common tasks. Explore sample source code." />
        <meta property="og:image" content="https://www.teradata.com/Content/Assets/default/teradata-logo-social.png" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="336" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quickstarts.teradata.com/" />
        <meta property="twitter:title" content="Teradata Getting Started" />
        <meta property="twitter:description" content="Get quickly up to speed with Teradata Vantage. Learn about features. Find how-tos for common tasks. Explore sample source code." />
        <meta property="twitter:image" content="https://www.teradata.com/Content/Assets/default/teradata-logo-social.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://teradata.com/',
            '@type': 'Organization',
            name: 'Meta Open Source',
            url: 'https://teradata.com/',
            logo: 'https://www.teradata.com/Content/Assets/default/teradata-logo-social.png',
          })}
        </script>
      </Head>
      <HomepageHeader />
      <main className={styles.features}>
        <QuickstartsPages />
      </main>
    </Layout>
  );
}
