import styles from './styles.module.css';  
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const SecondaryBanner = () => {
    const location = useLocation();
    const { i18n } = useDocusaurusContext();
  const currentPath = location.pathname.replace(/\/+$/, '');

  const hiddenExactPaths = [
  '', // para la raíz '/'
  `/${i18n.currentLocale}`,
  '/ai-unlimited',
  `/${i18n.currentLocale}/ai-unlimited`,
  '/quickstarts',
  `/${i18n.currentLocale}/quickstarts`,
];

  const isExactPath = (path) => currentPath === path.replace(/\/+$/, '');
  const shouldDisplayAlert = !hiddenExactPaths.some(isExactPath);


  if (!shouldDisplayAlert) return null;

  const quickstartsLink = "https://www.teradata.com/events/possible?utm_source=developer-site&utm_medium=display&utm_campaign=gbl-possible-devrel&utm_content=developer-quickstarts&utm_id=701V500000HTemgIAD";

  return (
    <div className={styles.secondaryBanner}>
      <span className={styles.bannerText}>
        Learn how to build the future of AI at Possible 2025.
      </span>
      &nbsp;
      <a className={styles.bannerTextLink} href={quickstartsLink} target="_blank" rel="noopener noreferrer">
        Register now
      </a>
    </div>
  );
};

export default SecondaryBanner;
