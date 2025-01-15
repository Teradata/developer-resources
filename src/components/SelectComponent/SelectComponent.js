import React, { useState } from 'react';
import { Select, CvListItem } from '@teradata-web/react-components';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

export default function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');
  const location = useLocation();

  const normalizePath = (path) => path.replace(/\/$/, '');
  const pathsNoAlert = normalizePath(`/quickstarts/`);
  const currentPath = normalizePath(location.pathname);
  const shouldDisplayAlert = !currentPath.includes(pathsNoAlert);

  const handleSelection = (event) => {
    const selectedIndex = event.detail.index; 
    setSelectedOption(selectedIndex);

    if (selectedIndex === 0) {
      window.location.href = '/ai-unlimited/install-ai-unlimited/';
    } else if (selectedIndex === 1) {
      window.location.href = '/ai-unlimited/fabric/get-started/';
    }
  };

  if (!shouldDisplayAlert) return null;

  return (
    <div className={styles.customContainer}>
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
    </div>
  );
}