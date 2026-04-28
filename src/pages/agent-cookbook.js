import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import AgentCookbookEditions from '@site/src/components/AgentCookbookFeatures/AgentCookbookEditions';
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
            Agent Cookbook
          </Heading>
          <p className="hero__subtitle">
            Recipes, patterns, and best practices for building intelligent agents
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStartedButton
              )}
              to="/agent-cookbook"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={HeroImageUrl}
            width="498"
            alt="Agent Cookbook"
          />
          <div className={styles.heroBlur}></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Recipes, patterns, and best practices for building intelligent agents">
      <Head>
        <title>Agent Cookbook - Build Intelligent Agents</title>
        <meta
          property="og:title"
          content="Agent Cookbook - Build Intelligent Agents"
        />
      </Head>
      <HomepageHeader />
      <main className={styles.features}>
        <AgentCookbookEditions />
      </main>
    </Layout>
  );
}
