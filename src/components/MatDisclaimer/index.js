import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AlertComponent from './AlertComponent';
import DialogComponent from './DialogComponent';
import useAlertVisibility from './useAlertVisibility';
import { translate } from '@docusaurus/Translate';

export default function MatDisclaimer() {
  const { isVisible, isDialogVisible, hideAlert, showDialog, hideDialog } = useAlertVisibility();
  const location = useLocation();
  const { i18n } = useDocusaurusContext();

  const normalizePath = (path) => path.replace(/\/$/, ''); 
  
  const pathsNoAlert = [
    normalizePath(`/${i18n.currentLocale}`),
    normalizePath(`/${i18n.currentLocale}/ai-unlimited`),
    normalizePath(`/${i18n.currentLocale}/quickstarts`),
  ];
  
  const currentPath = normalizePath(location.pathname);
//const shouldDisplayAlert = !pathsNoAlert.includes(currentPath);
  const shouldDisplayAlert = !pathsNoAlert.some(noAlertPath => currentPath.startsWith(noAlertPath)); 
  const shouldDisplayAlertForLocale = i18n.currentLocale !== 'en';

  if (!isVisible || !shouldDisplayAlert || !shouldDisplayAlertForLocale) return null;

  return (
    <div className={clsx(styles.alertWrapper)}>
      <AlertComponent 
        onClose={hideAlert} 
        onOpenDialog={showDialog} 
        alertDescription={translate({ message: 'mat.alert-message' })}
        linkLabel={translate({ message: 'mat.link' })}
      />
      {isDialogVisible && (
        <DialogComponent 
          onClose={hideDialog} 
          dialogHeading={translate({ message: 'mat.heading' })}
          dialogContent={translate({ message: 'mat.content' })}
          buttonLabel={translate({ message: 'mat.button' })}
          />
        )}
    </div>
  );
}