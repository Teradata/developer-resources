
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FeatureList } from './FeatureData';
import Link from '@docusaurus/Link';

function Feature({ imgBullet, imgBullet2, img, title, description, href, href2, descriptionLink, descriptionLink2   }) {
  return (
    <div className={clsx('col', styles.col)}>
      <div className={clsx('', styles.card)}>
        <img src={img} alt={title} title={title} width="40px"/>
        <div className={clsx(styles.pad)}>
          <Heading as="h3">{title}</Heading>
        </div>
        {description && <p>{description}</p>}
        <div className={clsx(styles.dot)}>
          <img src={imgBullet} className={clsx(styles.dotPad)}/>
          <Link 
            to={href} 
            target={descriptionLink === 'View Getting started' ? '_self' : '_blank'} 
            className={clsx(styles.links)}
          >
            {descriptionLink}
          </Link>
        </div>
        <br/>
        <div className={clsx(styles.dot)}>  
          <img src={imgBullet2} className={clsx(styles.dotPad)}/>
          <Link to={href2} target='_blank' className={clsx(styles.links)}>{descriptionLink2}</Link>
        </div>
      </div>
    </div>
  );
}

export default function JumIn() {
  return (
    <>
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <div className={clsx('row', styles.row)}>
          <Feature {...FeatureList[0]} />
          <Feature {...FeatureList[1]} />
          <Feature {...FeatureList[2]} />
          <Feature {...FeatureList[3]} />
        </div>
      </div>
    </section>
    </>
  );
}
