import React, { useEffect, useState } from 'react';
import { Header, Language, NavListItem } from '@bsahitya/react-components';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import SearchBar from '@theme/SearchBar';
import { ThemeConfig } from '@docusaurus/types';
export default function Navbar() {
  const { navItems }: ThemeConfig = useThemeConfig();
  const {
    navItems: nestedNavItems,
    title,
    languages,
  } = navItems as {
    navItems: NavListItem[];
    title: string;
    languages: Language[];
  };

  const secondaryMenuDetails = {
    menuElement: useNavbarSecondaryMenu().content as JSX.Element,
    title: translate({
      id: 'theme.docs.sidebar.title',
      message: 'Docs',
      description: 'The title for the sidebar in mobile view',
    }),
  };

  const [defaultLang, setDefaulLang] = useState('');
  const basePath = '/ai-unlimited-docs';

  const handleLanguageChange = (language) => {
    // Replace current language with another language
    if (getCurrentLanguage() !== '') {
      window.location = window.location.pathname.replace(
        `/${getCurrentLanguage()}/`,
        `/${language}/`
      ) as Location & string;
    }
    // Insert new language into path
    if (getCurrentLanguage() === '' && language !== '') {
      window.location = window.location.pathname.replace(
        `${basePath}/`,
        `${basePath}/${language}/`
      ) as Location & string;
    }
    // Remove language from path
    if (getCurrentLanguage() !== '' && language === '') {
      window.location = window.location.pathname.replace(
        `/${getCurrentLanguage()}/`,
        '/'
      ) as Location & string;
    }
  };

  const getCurrentLanguage = () => {
    const langRegEx = /\/ai-unlimited-docs\/(\w{2})\//;
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
        setDefaulLang(selectedLang.value);
      }
    }
  }, []);

  return (
    <Header
      key={defaultLang}
      navItems={nestedNavItems}
      title={title}
      headerActions={[{ actionElement: <SearchBar />, type: 'search' }]}
      languages={languages}
      onLanguageChange={handleLanguageChange}
      selectedLanguage={defaultLang}
      secondaryMenu={secondaryMenuDetails}
    ></Header>
  );
}
