import React, { useEffect, useState } from 'react';
import { Header } from '@bsahitya/td-doc-design';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function Navbar() {
  const { navItems } = useThemeConfig();
  const {
    navItems: nestedNavItems,
    title,
    headerActions,
    languages,
  } = navItems;

  const [defaultLang, setDefaulLang] = useState('');

  const handleLanguageChange = (language) => {
    window.location = `/td-ai-unlimited-docs/${
      language ? `${language}/` : ''
    }docs/install-ai-unlimited/`;
  };

  useEffect(() => {
    const langRegEx = /\/td-ai-unlimited-docs\/(\w{2})\/docs/;
    const currentLocation = window.location.pathname;
    const match = currentLocation.match(langRegEx);
    if (match && languages) {
      const language = match[1];
      const selectedLang = languages.find((lang) => lang.value === language);
      if (selectedLang) {
        selectedLang.active = true;
        setDefaulLang(selectedLang.value);
      }
    }
  }, []);

  return (
    <Header
      navItems={nestedNavItems}
      title={title}
      headerActions={headerActions}
      languages={languages}
      onLanguageChange={handleLanguageChange}
      selectedLanguage={defaultLang}
    ></Header>
  );
}
