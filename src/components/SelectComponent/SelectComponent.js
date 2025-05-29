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
    useBaseUrl('/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console'),
    useBaseUrl('/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal'),
    useBaseUrl('/ai-unlimited/install-ai-unlimited/setup-ai-unlimited'),
    useBaseUrl('/ai-unlimited/explore-and-analyze-data'),
    useBaseUrl('/ai-unlimited/explore-and-analyze-data/get-api-key'),
    useBaseUrl('/ai-unlimited/explore-and-analyze-data/create-first-project'),
    useBaseUrl('/ai-unlimited/explore-and-analyze-data/collaborate-project'),
    useBaseUrl('/ai-unlimited/explore-and-analyze-data/project-flow'),
    useBaseUrl('/ai-unlimited/explore-and-analyze-data/use-cases'),
    useBaseUrl('/ai-unlimited/explore-and-analyze-data/magic-commands'),
    useBaseUrl('/ai-unlimited/manage-ai-unlimited'),
    useBaseUrl('/ai-unlimited/manage-ai-unlimited/add-collaborators/'),
    useBaseUrl('/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project'),
    useBaseUrl('/ai-unlimited/manage-ai-unlimited/change-settings'),
    useBaseUrl('/ai-unlimited/resources'),
    useBaseUrl('/ai-unlimited/resources/aws-account-requirements'),
    useBaseUrl('/ai-unlimited/resources/azure-account-requirements'),
    useBaseUrl('/ai-unlimited/resources/create-oauth-app/'),
    useBaseUrl('/ai-unlimited/resources/jupyterlab/'),
    useBaseUrl('/ai-unlimited/resources/jupyterlab/deploy-jupyter-aws-console/'), 
    useBaseUrl('/ai-unlimited/resources/jupyterlab/deploy-jupyter-azure-portal/'),
    useBaseUrl('/ai-unlimited/resources/jupyterlab/run-jupyter-docker/'),
    useBaseUrl('/ai-unlimited/resources/quickstart/'),
    useBaseUrl('/ai-unlimited/resources/quickstart/run-ai-unlimited-jupyterlab-docker/'),
    useBaseUrl(`/ai-unlimited/resources/quickstart/docker-when-you're-done/`),
    useBaseUrl('/ai-unlimited/whats-new/'),
    useBaseUrl('/ai-unlimited/faq/'),
    useBaseUrl('/ai-unlimited/glossary/'),
    useBaseUrl('/ai-unlimited/support/'),
  ];

  const selectedOptionOnePaths = [
    fabricUrl,
    fabricUrl,
    useBaseUrl('/ai-unlimited/fabric/get-started/create-notebook'),
    useBaseUrl('/ai-unlimited/fabric/get-started/load-data'),
    useBaseUrl('/ai-unlimited/fabric/get-started/connect-explore'),
    useBaseUrl('/ai-unlimited/fabric/first-use-case'),
    useBaseUrl('/ai-unlimited/fabric/in-db-functions'),
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