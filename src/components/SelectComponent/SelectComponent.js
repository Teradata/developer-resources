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
  const selectedOptionZeroPaths = [
    aiUnlimitedUrl,
    normalizePath('/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console'),
    normalizePath('/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal'),
    normalizePath('/ai-unlimited/install-ai-unlimited/setup-ai-unlimited'),
    normalizePath('/ai-unlimited/explore-and-analyze-data'),
    normalizePath('/ai-unlimited/explore-and-analyze-data/get-api-key'),
    normalizePath('/ai-unlimited/explore-and-analyze-data/create-first-project'),
    normalizePath('/ai-unlimited/explore-and-analyze-data/collaborate-project'),
    normalizePath('/ai-unlimited/explore-and-analyze-data/project-flow'),
    normalizePath('/ai-unlimited/explore-and-analyze-data/use-cases'),
    normalizePath('/ai-unlimited/explore-and-analyze-data/magic-commands'),
    normalizePath('/ai-unlimited/manage-ai-unlimited'),
    normalizePath('/ai-unlimited/manage-ai-unlimited/add-collaborators'),
    normalizePath('/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project'),
    normalizePath('/ai-unlimited/manage-ai-unlimited/change-settings'),
    normalizePath('/ai-unlimited/resources'),
    normalizePath('/ai-unlimited/resources/aws-account-requirements'),
    normalizePath('/ai-unlimited/resources/azure-account-requirements'),
    normalizePath('/ai-unlimited/resources/create-oauth-app/'),
    normalizePath('/ai-unlimited/resources/jupyterlab/'),
    normalizePath('/ai-unlimited/resources/jupyterlab/deploy-jupyter-aws-console/'), 
    normalizePath('/ai-unlimited/resources/jupyterlab/deploy-jupyter-azure-portal/'),
    normalizePath('/ai-unlimited/resources/jupyterlab/run-jupyter-docker/'),
    normalizePath('/ai-unlimited/resources/quickstart/'),
    normalizePath('/ai-unlimited/resources/quickstart/run-ai-unlimited-jupyterlab-docker/'),
    normalizePath(`/ai-unlimited/resources/quickstart/docker-when-you're-done/`),
    normalizePath('/ai-unlimited/whats-new/'),
    normalizePath('/ai-unlimited/faq/'),
    normalizePath('/ai-unlimited/glossary/'),
    normalizePath('/ai-unlimited/support/'),
  ];

  const selectedOptionOnePaths = [
    fabricUrl,
    normalizePath('/ai-unlimited/fabric/get-started/create-notebook/'),
    normalizePath('/ai-unlimited/fabric/get-started/load-data/'),
    normalizePath('/ai-unlimited/fabric/get-started/connect-explore/'),
    normalizePath('/ai-unlimited/fabric/first-use-case/'),
    normalizePath('/ai-unlimited/fabric/in-db-functions/'),
  ];
  useEffect(() => {
    if (selectedOptionZeroPaths.includes(currentPath)) {
      setSelectedOption('0');
    } else if (selectedOptionOnePaths.includes(currentPath)) {
      setSelectedOption('1');
    }
  }, [currentPath, aiUnlimitedUrl, fabricUrl]);

  const handleSelection = (event) => {
    const selectedIndex = event.detail.index?.toString();
    if (selectedIndex === '0' && !selectedOptionZeroPaths.includes(currentPath)) {
      window.location.href = aiUnlimitedUrl;
    } else if (selectedIndex === '1' && !selectedOptionOnePaths.includes(currentPath)) {
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