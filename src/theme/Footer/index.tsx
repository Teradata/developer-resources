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

interface FooterItems  {
  links: FooterLink[],
  copyright: string;
  socialLinks: SocialLinks;
  legalLinks: FooterNavLink[];
}

function translateFooterItems(footerItems: FooterLink[]): FooterLink[] {
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
  const { links, copyright, socialLinks, legalLinks } = footerItems as FooterItems;

  const translatedLinks = translateFooterItems(links);
  const translatedCopyright = `${new Date().getFullYear()} ${translate({ message: copyright })}`;
  const translatedSocialLinks = {
    ...socialLinks,
    title: translate({ message: socialLinks.title ?? '' }),
    items: socialLinks.items?.map((link) => {
      return {
        ...link,
        label: translate({ message: link.label ?? '' }),
      }
    })
  } 
  const translatedLegalLinks = legalLinks.map((link) => {
    return {
      ...link,
      label: translate({ message: link.label }),
    }
  })

  return (
    <TDFooter
      links={translatedLinks}
      copyright={translatedCopyright}
      socialLinks={translatedSocialLinks}
      legalLinks={translatedLegalLinks}
    />
  );
}

export default React.memo(Footer);
