import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DevelopersHomepage from '@site/src/components/DevelopersHomepage';
import HeroImageUrl from '@site/static/img/developers/hero.png';
import styles from './index.module.css';
import React from 'react';
import { Banner, Button, Typography } from '@teradata-web/react-components';


function HomepageHeader() {
  const handleButtonClick = () => {
    window.location.href = `quickstarts/`;
  };
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <Banner
            content={
              <div>
                <Typography scale="body1">A scalable, on-demand compute engine in the cloud.</Typography> 
                <br/>
                <Button label='Learn more' primary={true} icon='fa fa-arrow-right' trailingIcon={true} onClick={handleButtonClick}></Button>
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
