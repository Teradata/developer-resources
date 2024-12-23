import React, { useState } from 'react';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();

  const normalizePath = (path) => path.replace(/\/$/, ''); 

  const pathsNoAlert = normalizePath(`/quickstarts/`);

  const currentPath = normalizePath(location.pathname);

  const shouldDisplayAlert = !currentPath.includes(pathsNoAlert);  


  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === 'cloud-service-provider') {
      window.location.href = '/ai-unlimited/install-ai-unlimited/';
    } else if (event.target.value === 'microsoft-fabric') {
      window.location.href = '/ai-unlimited/fabric/get-started/';
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const shouldShowLabel = isFocused || selectedOption !== '';

  if (!shouldDisplayAlert) return null;

  return (
    <div className={styles.customContainer}>
      {shouldShowLabel && (
        <label className={styles.label} htmlFor="select-screen">
          Platform
        </label>
      )}

      <select
        id="select-screen"
        className={styles.customSelect}
        value={selectedOption}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <option value="" disabled hidden>
          Platform
        </option>
        <option value="cloud-service-provider">Cloud service provider</option>
        <option value="microsoft-fabric">Microsoft Fabric</option>
      </select>
    </div>
  );
}
