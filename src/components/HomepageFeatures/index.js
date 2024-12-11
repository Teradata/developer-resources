import clsx from 'clsx';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';
import Editions from './Editions';

const FeatureTitle = 'home_page.select_platform';
const FeatureSubTitle = 'home_page.select_platform_2';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <h2 className={styles.subjet}>{translate({ message: FeatureTitle })}</h2>
        <p>{translate({ message: FeatureSubTitle })}</p>
        <Editions />
      </div>
    </section>
  );
}
