import React, { useState } from 'react';
import styles from './styles.module.css';

export default function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFocused, setIsFocused] = useState(false); // Controlar el enfoque

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'cloud-service-provider') {
        window.location.href = '/ai-unlimited/install-ai-unlimited/';
      } else if (event.target.value === 'microsoft-fabric') {
        window.location.href = '/ai-unlimited/fabric/get-started/';
      }
  };

  const handleFocus = () => {
    setIsFocused(true); // Mostrar el label al enfocar
  };

  const handleBlur = () => {
    setIsFocused(false); // Ocultar el label si no hay selección
  };

  const shouldShowLabel = isFocused || selectedOption !== '';

  return (
    <div className={styles.customContainer}>
      {/* Mostrar label solo si hay selección o el select está enfocado */}
      {shouldShowLabel && <label className={styles.label}>Platform</label>}

      <select
        id="select-screen"
        className={styles.customSelect}
        value={selectedOption}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <option value="" disabled>
          Platform
        </option>
        <option value="cloud-service-provider">Cloud service provider</option>
        <option value="microsoft-fabric">Microsoft Fabric</option>
      </select>
    </div>
  );
}
