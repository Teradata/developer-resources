import React, { useState } from 'react';
import styles from './styles.module.css';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        {children.map((tab) => {
          const { label } = tab.props;

          return (
            <button
              key={label}
              className={label === activeTab ? 'active' : ''}
              onClick={(e) => handleClick(e, label)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className=''>
        {children.map((tab) => {
          if (tab.props.label !== activeTab) return undefined;
          return tab.props.children;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label}>
      {children}
    </div>
  );
};

export { Tabs, Tab };
