import styles from './styles.module.css';  
import { useLocation } from 'react-router-dom';

const SecondaryBanner = () => {
    const location = useLocation();
    const normalizePath = (path) => path.replace(/\/$/, ''); 
    const currentPath = normalizePath(location.pathname);

    const paths = [
        normalizePath(`/`),
        normalizePath(`/ai-unlimited`),
        normalizePath(`/quickstarts`),
    ];
    const shouldDisplayAlert = !paths.includes(currentPath);
    
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