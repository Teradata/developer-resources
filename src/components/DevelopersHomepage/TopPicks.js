
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { FeatureList2 } from './FeatureData';
import { Typography } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';

function FeatureStayUpToDate({ img, img2, title, description, href }) {
  return (
    <Link to={href} className={clsx('col col--4', styles.col)}>
      <div className={clsx('doc-card', styles.card)}>
        <div className={clsx(styles.toppicks)}>
          <span className={clsx('material-symbols-outlined', styles.symbols)}>{img}</span>
          {img2 && <span className={clsx('material-symbols-outlined', styles.symbols2)}>{img2}</span>}
        </div>
        <div className={styles.stayCon}>
          <Heading as="h3">{title}</Heading>
        </div>
        
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
}

export default function DevelopersHomepage() {
  return (
    <>
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col', styles.col2)}>
            <p className={clsx(styles.firstSubheading)}></p>
            <Typography scale="eyebrow">
              {translate({ message: 'developers.stay-up-to-date' })}
            </Typography>
            
            <p className={clsx(styles.secondSubheading, styles.eyebrow)}>
              <Typography scale="headline2">
               {translate({ message: 'developers.top-picks-from-Teradata' })}
              </Typography>
            </p>
          </div>
        </div>
        <div className={clsx('row', styles.row)}>
          {FeatureList2.map((props, idx) => (
            <FeatureStayUpToDate key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
