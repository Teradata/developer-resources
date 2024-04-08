import React from 'react';
import { Header } from '@bsahitya/td-doc-design';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Navbar() {
  const {
    siteConfig: {
      themeConfig: { navItems },
    },
  } = useDocusaurusContext();
  return (
    <Header
      navItems={navItems.navItems}
      title={navItems.title}
      headerActions={navItems.headerActions}
      languages={navItems.languages}
    ></Header>
  );
}
