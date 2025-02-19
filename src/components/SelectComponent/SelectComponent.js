import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');
  const location = useLocation();
  const normalizePath = (path) => path.replace(/\/$/, '');
  const currentPath = normalizePath(location.pathname);
  const aiUnlimitedUrl = useBaseUrl('/ai-unlimited/install-ai-unlimited');
  const fabricUrl = useBaseUrl('/ai-unlimited/fabric/get-started');
  const pathsNoAlert = normalizePath(`/quickstarts/`);
  const shouldDisplayAlert = !currentPath.includes(pathsNoAlert);

  useEffect(() => {
    if (currentPath === aiUnlimitedUrl) {
      setSelectedOption('0');
    } else if (currentPath === fabricUrl) {
      setSelectedOption('1');
    }
  }, [currentPath, aiUnlimitedUrl, fabricUrl]);

  const handleSelection = (event) => {
    const selectedIndex = event.detail.index?.toString();
    if (selectedIndex === '0' && currentPath !== aiUnlimitedUrl) {
      window.location.href = aiUnlimitedUrl;
    } else if (selectedIndex === '1' && currentPath !== fabricUrl) {
      window.location.href = fabricUrl;
    }
  };

  if (!shouldDisplayAlert) return null;

  return (
    <BrowserOnly>
      {() => {
        const { Select, CvListItem } = require('@teradata-web/react-components');

        return (
          <Select
            label="Platform &nbsp;"
            outlined
            onSelected={handleSelection}
            className={styles.selectInput}
          >
            <CvListItem value="0" selected={selectedOption === '0'}>
              Cloud service provider
            </CvListItem>
            <CvListItem value="1" selected={selectedOption === '1'}>
              Microsoft Fabric
            </CvListItem>
          </Select>
        );
      }}
    </BrowserOnly>
  );
}
