import styles from './styles.module.css';  
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const normalizePath = (path) => path.replace(/\/+$/, '');

const SecondaryBanner = () => {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  const currentPath = location.pathname.replace(/\/+$/, '');
  const developerPath = ``;
  const quickstartsPath = `/quickstarts`;
  const aiUnlimitedPath = `/ai-unlimited`;  
  const pathsNoAlert = [
    normalizePath(`/${i18n.currentLocale}`),
    normalizePath(`/${i18n.currentLocale}/ai-unlimited`),
    normalizePath(`/${i18n.currentLocale}/quickstarts`),
  ];
  let shouldDisplayAlert = true;

  if (currentPath === developerPath || currentPath === quickstartsPath || currentPath === aiUnlimitedPath || pathsNoAlert.includes(currentPath)) {
    shouldDisplayAlert = false;
  } 

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
