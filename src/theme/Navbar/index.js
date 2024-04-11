import React from 'react';
import { Header } from '@bsahitya/td-doc-design';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';

export default function Navbar() {
  const { navItems } = useThemeConfig();
  const {
    navItems: nestedNavItems,
    title,
    headerActions,
    languages,
  } = navItems;
  const secondaryNavbar = useNavbarSecondaryMenu();
  console.log(secondaryNavbar);

  return (
    <>
      <Header
        navItems={nestedNavItems}
        title={title}
        headerActions={headerActions}
        languages={languages}
      ></Header>
      {secondaryNavbar.content}
    </>
  );
}
