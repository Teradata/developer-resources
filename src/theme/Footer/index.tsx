import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  FooterLink,
  FooterNavLink,
  SocialLinks,
  Footer as TDFooter,
} from '@teradata-web/react-components';
import { ThemeConfig } from '@docusaurus/types';

function Footer() {
  const { footerItems }: ThemeConfig = useThemeConfig();
  if (!footerItems) {
    return null;
  }
  const { links, copyright, socialLinks, legalLinks } = footerItems as {
    links: FooterLink[];
    copyright: string;
    socialLinks: SocialLinks;
    legalLinks: FooterNavLink[];
  };

  return (
    <TDFooter
      links={links}
      copyright={copyright}
      socialLinks={socialLinks}
      legalLinks={legalLinks}
    />
  );
}

export default React.memo(Footer);
