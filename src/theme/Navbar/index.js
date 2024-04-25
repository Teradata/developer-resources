import React, { useEffect, useState } from 'react';
import { Header } from '@bsahitya/td-doc-design';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import SearchBar from '@theme/SearchBar';
export default function Navbar() {
  const { navItems } = useThemeConfig();
  const {
    navItems: nestedNavItems,
    title,
    headerActions,
    languages,
  } = navItems;

  const secondaryMenuDetails = {
    menuElement: useNavbarSecondaryMenu().content,
    title: translate({
      id: 'theme.docs.sidebar.title',
      message: 'Docs',
      description: 'The title for the sidebar in mobile view',
    }),
  };

  const [defaultLang, setDefaulLang] = useState('');
  const basePath = '/td-ai-unlimited-docs';

  const handleLanguageChange = (language) => {
    // Replace current language with another language
    if (getCurrentLanguage() !== '') {
      window.location = window.location.pathname.replace(`/${getCurrentLanguage()}/`, `/${language}/`);
    }
    // Insert new language into path
    if (getCurrentLanguage() === '' && language !== '') {
      window.location = window.location.pathname.replace(`${basePath}/`,`${basePath}/${language}/`);
    }
    // Remove language from path
    if (getCurrentLanguage() !== '' && language === '') {
      window.location = window.location.pathname.replace(`/${getCurrentLanguage()}/`, '/');
    }
  };

  const getCurrentLanguage = () => {
    const langRegEx = /\/td-ai-unlimited-docs\/(\w{2})\//;
    const currentLocation = window.location.pathname;
    const match = currentLocation.match(langRegEx);
    return match ? match[1] : '';
  };

  useEffect(() => {
    const currentLanguage = getCurrentLanguage();
    if (currentLanguage && languages) {
      const selectedLang = languages.find(
        (lang) => lang.value === currentLanguage
      );
      if (selectedLang) {
        selectedLang.active = true;
        setDefaulLang(selectedLang.value);
      }
    }
  }, []);

  return (
    <>
      <Header
        key={defaultLang}
        navItems={nestedNavItems}
        title={title}
        headerActions={headerActions}
        languages={languages}
        onLanguageChange={handleLanguageChange}
        selectedLanguage={defaultLang}
        secondaryMenu={secondaryMenuDetails}
      ></Header>
      <SearchBar></SearchBar>
    </>
  );
}
