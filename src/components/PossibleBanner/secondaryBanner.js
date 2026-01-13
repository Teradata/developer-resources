import styles from './styles.module.css';  
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';


const SecondaryBanner = () => {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  const normalizePath = (path) => path.replace(/\/+$/, '');
  const currentPath = normalizePath(location.pathname);
  const quickstartsPath = useBaseUrl('/quickstarts');
  const aiUnlimitedPath = useBaseUrl('/ai-unlimited');
  const baseLocale = useBaseUrl(`/${i18n.currentLocale}`);
  const pathsNoAlert = [
    normalizePath(baseLocale),
    normalizePath(`${baseLocale}/ai-unlimited`),
    normalizePath(`${baseLocale}/quickstarts`),
    normalizePath(quickstartsPath),
    normalizePath(aiUnlimitedPath),
    normalizePath(useBaseUrl('/')), 
  ];

  const shouldDisplayAlert = !pathsNoAlert.includes(currentPath);
  if (!shouldDisplayAlert) return null;

  const quickstartsLink = "https://www.teradata.com/customers/research-panel";

  return (
    <div className={styles.secondaryBanner}>
      <span className={styles.bannerText}>
        Join our Research Panel and help shape the future of Teradata.
      </span>
      <a className={styles.bannerTextLink} href={quickstartsLink} target="_blank" rel="noopener noreferrer">
        Sign up.
      </a>
    </div>
  );
};

export default SecondaryBanner;
