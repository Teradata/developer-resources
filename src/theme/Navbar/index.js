import React from 'react';
import { Header } from '@bsahitya/td-doc-design';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHistory } from '@docusaurus/router';

export default function Navbar() {
  const { navItems } = useThemeConfig();
  const {
    navItems: nestedNavItems,
    title,
    headerActions,
    languages,
  } = navItems;

  const history = useHistory();

  const handleLanguageChange = (language) => {
    history.push(
      `/td-ai-unlimited-docs/${
        language ? `${language}/` : ''
      }docs/install-ai-unlimited/`
    );
  };

  return (
    <Header
      navItems={nestedNavItems}
      title={title}
      headerActions={headerActions}
      languages={languages}
      onLanguageChange={handleLanguageChange}
    ></Header>
  );
}
