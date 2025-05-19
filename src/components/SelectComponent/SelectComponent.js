import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SelectComponent() {
  const location = useLocation();
  const normalizePath = (path) => path.replace(/\/$/, '');
  const currentPath = normalizePath(location.pathname);
  const pathsNoAlert = normalizePath(`/quickstarts/`);
  const shouldDisplayAlert = !currentPath.includes(pathsNoAlert);

  const isPathMatching = (basePath, path) => normalizePath(path).startsWith(normalizePath(basePath));

  const initialOption = isPathMatching('/ai-unlimited/fabric', currentPath)
    ? '1'
    : isPathMatching('/ai-unlimited', currentPath)
    ? '0'
    : undefined; 

  const [selectedOption, setSelectedOption] = useState(initialOption);

  useEffect(() => {
    if (isPathMatching('/ai-unlimited/fabric', currentPath)) {
      setSelectedOption('1');
    } else if (isPathMatching('/ai-unlimited', currentPath)) {
      setSelectedOption('0');
    } else {
      setSelectedOption(undefined); 
    }
  }, [currentPath]);

  const handleSelection = (event) => {
    const selectedIndex = event.detail.index?.toString();
    if (selectedIndex === selectedOption || selectedIndex === undefined) {
      return; 
    }

    if (selectedIndex === '0') {
      window.location.href = '/ai-unlimited/install-ai-unlimited';
    } else if (selectedIndex === '1') {
      window.location.href = '/ai-unlimited/fabric/get-started';
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