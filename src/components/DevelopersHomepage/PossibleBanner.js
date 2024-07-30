import clsx from 'clsx';
import styles from './styles.module.css';
import PossibleImageUrl from '@site/static/img/possible_img.webp';
import { Card, Typography } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';

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

export default function PossibleBanner() {
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