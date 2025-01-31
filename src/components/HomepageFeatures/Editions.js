import React from 'react';
import { TabBar, Tab } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';
import Cloud from './cloud';
import MicrosoftFabric from './MicrosoftFabric';

export default function Editions() {
  return (
    <TabBar defaultSelectedIndex={0}>
      <Tab label={translate({ message: 'home_page.edition_cloud' })}>
        <Cloud/>
      </Tab>

      <Tab label={translate({ message: 'home_page.edition_ms_fabric' })}>
        <MicrosoftFabric/>
      </Tab>
    </TabBar>
  );
}