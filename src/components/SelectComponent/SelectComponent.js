import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');
  const location = useLocation();

  const normalizePath = (path) => path.replace(/\/$/, '');
  const pathsNoAlert = normalizePath(`/quickstarts/`);
  const currentPath = normalizePath(location.pathname);
  const shouldDisplayAlert = !currentPath.includes(pathsNoAlert);

  const aiUnlimitedUrl = useBaseUrl('/ai-unlimited/install-ai-unlimited/');
  const fabricUrl = useBaseUrl('/ai-unlimited/fabric/get-started/');

  const handleSelection = (event) => {
    const selectedIndex = event.detail.index; 
    setSelectedOption(selectedIndex);

    if (selectedIndex === 0) {
      window.location.href = aiUnlimitedUrl;
    } else if (selectedIndex === 1) {
      window.location.href = fabricUrl;
    }
  };

  if (!shouldDisplayAlert) return null;

  return (
    <div className={styles.customContainer}>
      <BrowserOnly>
        {() => {
          const { Select, CvListItem } = require('@teradata-web/react-components');

          return (
            <Select
              className={styles.selectInput}
              outlined
              label="Platform"
              value={selectedOption}
              onSelected={handleSelection}
            >
              <CvListItem tabindex="-1" value="0">
                Cloud service provider
              </CvListItem>
              <CvListItem tabindex="-1" value="1">
                Microsoft Fabric
              </CvListItem>
            </Select>
          );
        }}
      </BrowserOnly>
    </div>
  );
}