import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import PossibleImageUrl from '@site/static/img/possible_img.webp';
import { Card, Typography } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';

const FeatureTitle = 'Categories';

const FeatureList = [
  {
    title: 'Get started',
    description:'See what AI Unlimited includes, prerequisites you need, and installation how-tos',
    href: 'install-ai-unlimited/',
  },
  {
    title: `Sample use cases`,
    description: 'Explore ways to use AI Unlimited to experiment and innovate',
    href: '/ai-unlimited/explore-and-analyze-data/use-cases/',
  },
  {
    title: `What's new`,
    description: 'Watch for new features and updates—and see what’s coming',
    href: '/ai-unlimited/whats-new/',
  },
  {
    title: 'Explore and analyze data',
    description: 'Learn about AI Unlimited projects and create your first one',
    href: '/ai-unlimited/explore-and-analyze-data/',
  },
  {
    title: `Analytic functions`,
    description: 'Browse and search ClearScape™ functions to use in projects',
    href: 'https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita',
  },
  {
    title: 'Manage projects',
    description: 'Learn how to manage projects or change AI Unlimited settings',
    href: '/ai-unlimited/manage-ai-unlimited/',
  },
  {
    title: 'Other resources',
    description: 'Find additional installation resources, and more',
    href: '/ai-unlimited/resources/',
  },
  {
    title: 'FAQ',
    description: 'Get answers to your questions',
    href: '/ai-unlimited/faq/',
  },
  {
    title: 'Glossary',
    description: 'Look up AI Unlimited terminology',
    href: '/ai-unlimited/glossary/',
  },
];

export function PossibleBanner() {
  return (
    <>
      <section className={clsx('container', styles.container)}>
        <a
          className={styles.possibleBannerLink}
          href="https://www.teradata.com/events/possible"
          target="_blank"
          aria-label={translate({
            message: 'home_page.possible_banner_title',
          })}
        >
          <Card
            imageSrc={PossibleImageUrl}
            imageAltText={translate({
              message: 'home_page.possible_banner_title',
            })}
            imageWidth="1"
            content={<BannerContent />}
          />
        </a>
      </section>
    </>
  );
}

function BannerContent() {
  return (
    <section className={styles.bannerContent}>
      <div className={styles.bannerCaption}>
        <Typography scale="caption">
          <span className={styles.featuredEvent}>
            {translate({ message: 'home_page.featured_event' })}
          </span>
        </Typography>
        <Typography scale="headline3">
          <span className={styles.bannerTitle}>
            {translate({ message: 'home_page.possible_banner_title' })}
          </span>
        </Typography>
      </div>
      <Typography scale="body1">
        <div className={styles.registerNow}>
          {translate({ message: 'home_page.register_now' })}
        </div>
      </Typography>
    </section>
  );
}

function Feature({ title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)}>
        <Heading as="h3">{title}</Heading>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <PossibleBanner />
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
    </>
  );
}