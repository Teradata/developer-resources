import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import DevelopersHomepage from '@site/src/components/DevelopersHomepage';
import HeroImageUrl from '@site/static/img/developers/developers_homepage_1x.webp';
import { translate } from '@docusaurus/Translate';
import styles from './index.module.css';
import React from 'react';
import { Banner, Button, Typography } from '@teradata-web/react-components';


function HomepageHeader() {
  return (
    <header className={clsx('hero--primary', styles.heroBanner, styles.noPadding)}>
      <div className={clsx('container', styles.container)}>
        <Banner
            content={
              <div>
                <Typography scale="body1">{translate({ message: 'developers.title_description' })}</Typography> 
                <br/>
                <Link to="https://quickstarts.teradata.com/">
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
            title={translate({ message: 'developers.welcome_message' })}
          />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.features}>
        <DevelopersHomepage />
      </main>
    </Layout>
  );
}
