import React, { useEffect, useState } from 'react';
import {
  Button,
  Header,
  HeaderAction,
  Language,
  NavListItem,
} from '@teradata-web/react-components';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { ThemeConfig } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Partytown } from '@builder.io/partytown/react';
import SearchBar from '../SearchBar';
import MatDisclaimer from '../../components/MatDisclaimer';

function translateNavItems(navItems: NavListItem[]): NavListItem[] {
  const location = useLocation();
  return navItems.map((item) => {
    let isActive = item.href ? location.pathname.startsWith(item.href) : false;

    if (item.navItems) {
      isActive = item.navItems.some((navItem) =>
        navItem.href ? location.pathname.startsWith(navItem.href) : false
      );
    }

    return {
      ...item,
      label: translate({ message: item.label }),
      active: isActive,
      navItems: item.navItems ? translateNavItems(item.navItems) : undefined,
    };
  });
}

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

  const basePath = useBaseUrl('');
  const partytownPath = basePath ? `${basePath}/~partytown/`: '/~partytown/';
  const translatedTitle = translate({ message: title });
  const translatedNavItems = translateNavItems(nestedNavItems);

  const headerActions: HeaderAction[] = [
    { actionElement: <SearchBar />, type: 'search' },
    {
      actionElement: (
        <Link to="https://www.teradata.com/getting-started/demos/clearscape-analytics">
          <Button
            label={translate({ message: 'header.actions.free_demo' })}
            icon="fa-solid fa-arrow-right-long"
            trailingIcon={true}
            variant=''
          />
        </Link>
      ),
      type: 'button',
    },
  ];

  const secondaryMenuDetails = {
    menuElement: useNavbarSecondaryMenu().content as JSX.Element,
    title: translate({
      message: 'sidenav.title',
      description: 'sidenav.title_description',
    }),
  };

  const [defaultLang, setDefaulLang] = useState('');

  const handleLanguageChange = (language) => {
    // Replace current language with another language
    if (getCurrentLanguage() !== '' && language !== '') {
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
    // Regex to capture characters from the url which represent the selected language
    const langRegEx = /^\/([a-zA-Z]{2})(\/|$)/;
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
    <>
    <Partytown lib={partytownPath} />
    <Header
      key={defaultLang}
      navItems={translatedNavItems}
      title={translatedTitle}
      titleLink={`https://developers.teradata.com/${defaultLang}`}
      headerActions={headerActions}
      languages={languages}
      onLanguageChange={handleLanguageChange}
      selectedLanguage={defaultLang}
      secondaryMenu={secondaryMenuDetails}
    ></Header>
    <MatDisclaimer/>
    </>
  );
}
