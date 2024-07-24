import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  FooterLink,
  FooterNavLink,
  SocialLinks,
  Footer as TDFooter,
} from '@teradata-web/react-components';
import { ThemeConfig } from '@docusaurus/types';
import { translate } from '@docusaurus/Translate';

interface FooterItems {
  links: FooterLink[];
  copyright: string;
  socialLinks: SocialLinks;
  legalLinks: FooterNavLink[];
  linksOfInterest: FooterLink;
}

function translateFooterItems(footerItems: FooterLink[]|SocialLinks[]): FooterLink[] {
  return footerItems.map((item) => {
    return {
      ...item,
      title: translate({ message: item.title }),
      items: item.items ? translateFooterNavLinks(item.items) : undefined,
    };
  });
}

function translateFooterNavLinks(footerNavLinks: FooterNavLink[]): FooterNavLink[] {
  return footerNavLinks.map((link) => {
    return {
      ...link,
      label: translate({ message: link.label }),
    }
  })
}

function Footer() {
  const { footerItems }: ThemeConfig = useThemeConfig();
  if (!footerItems) {
    return null;
  }
  const { links, copyright, socialLinks, legalLinks, linksOfInterest } =
    footerItems as FooterItems;
  const translatedLinks = translateFooterItems(links);
  const translatedCopyright = `${new Date().getFullYear()} ${translate({ message: copyright })}`;
  const translatedSocialLinks = translateFooterItems([socialLinks])[0] as SocialLinks;
  const translatedLegalLinks = translateFooterNavLinks(legalLinks);
  const translatedLinksOfInterest = translateFooterItems([
    linksOfInterest,
  ])[0] as FooterLink;

  return (
    <TDFooter
      links={translatedLinks}
      copyright={translatedCopyright}
      socialLinks={translatedSocialLinks}
      legalLinks={translatedLegalLinks}
      linksOfInterest={translatedLinksOfInterest}
    />
  );
}

export default React.memo(Footer);
