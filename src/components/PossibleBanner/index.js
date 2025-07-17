import PossibleImageUrl from '@site/static/img/Possible-2025-OG.webp';
import { Card, Typography } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';  
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

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
    const location = useLocation();
    const normalizePath = (path) => path.replace(/\/$/, ''); 
    const currentPath = normalizePath(location.pathname);
    let link = '';

    if (currentPath === normalizePath(`/quickstarts`)) {
        link = 'https://www.teradata.com/events/possible?utm_source=developer-site&utm_medium=display&utm_campaign=gbl-possible-devrel&utm_content=developer-quickstarts&utm_id=701V500000HTemgIAD';
    } else{
        link = 'https://www.teradata.com/events/possible?utm_source=developer-site&utm_medium=display&utm_campaign=gbl-possible-devrel&utm_content=developer-portal&utm_id=701V500000HTemgIAD';
    }
    
    return (
        <section className={clsx('container', styles.container)}>
            <a
                className={styles.possibleBannerLink}
                href={link}
                target="_blank"
                aria-label={translate({
                    message: 'home_page.possible_banner_title',
                })}
            >
                <Card
                    imageSrc={PossibleImageUrl}
                    imageAltText={translate({ message: 'home_page.possible_banner_title' })}
                    imageWidth="350px"
                    content={<BannerContent />}
                />
            </a>
        </section>
    );
}