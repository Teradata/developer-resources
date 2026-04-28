import React from 'react';
import { TabBar, Tab } from '@teradata-web/react-components';
import { translate } from '@docusaurus/Translate';
import GettingStarted from './GettingStarted';
import Recipes from './Recipes';

export default function AgentCookbookEditions() {
  return (
    <TabBar defaultSelectedIndex={0}>
      <Tab label={translate({ message: 'agent_cookbook.getting_started' })}>
        <GettingStarted/>
      </Tab>

      <Tab label={translate({ message: 'agent_cookbook.recipes' })}>
        <Recipes/>
      </Tab>
    </TabBar>
  );
}
