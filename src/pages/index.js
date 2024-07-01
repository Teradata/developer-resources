import clsx from 'clsx';
import Link from '@docusaurus/Link';
//import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import DevelopersHomepage from '@site/src/components/DevelopersHomepage';
import HeroImageUrl from '@site/static/img/developers/hero.png';
//import Translate from '@docusaurus/Translate';
//import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';
import { Banner, Button, Typography } from '@teradata-web/react-components';


function HomepageHeader() {
//  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <Banner
            content={
              <div>
                <Typography scale="body1">A scalable, on-demand compute engine in the cloud.</Typography> 
                <br/>
                <Link to="/quickstarts">
                  <Button
                    label="Learn more"
                    primary={true}
                    icon="fa fa-arrow-right"
                    trailingIcon={true}
                  />
                </Link>
              </div>}
            imageSrc={HeroImageUrl}
            isHero={true}
            title="Welcome to the Teradata Developers Portal"
          />
      </div>
    </header>
  );
}

export default function Home() {
//  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <title>Teradata Developer Portal</title>
        <meta name="description" content="Teradata Developer Portal" />
        <link rel="preconnect" href="https://teradata.com" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.developers.teradata.com" />
        <meta property="og:title" content="Teradata Developer Portal | Teradata for Developers" />
        <meta property="og:description" content="Build innovative solutions with the most powerful analytical platform on the planet. Get Started with Vantage, Browse technical Docs and Download useful assets." />
        <meta property="og:image" content="https://github.com/Teradata/developers.teradata.com/blob/main/assets/images/developer-portal-preview.png" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="336" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.developers.teradata.com" />
        <meta property="twitter:title" content="Teradata Developer Portal | Teradata for Developers" />
        <meta property="twitter:description" content="Build innovative solutions with the most powerful analytical platform on the planet. Get Started with Vantage, Browse technical Docs and Download useful assets." />
        <meta property="twitter:image" content="https://github.com/Teradata/developers.teradata.com/blob/main/assets/images/developer-portal-preview.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://teradata.com/',
            '@type': 'Organization',
            name: 'Meta Open Source',
            url: 'https://teradata.com/',
            logo: 'https://github.com/Teradata/developers.teradata.com/blob/main/assets/images/developer-portal-preview.png',
          })}
        </script>
      </Head>
      <HomepageHeader />
      <main className={styles.features}>
        <DevelopersHomepage />
      </main>
    </Layout>
  );
}
