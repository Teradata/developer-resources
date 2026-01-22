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

function translateFooterItems(
  footerItems: FooterLink[] | SocialLinks[]
): FooterLink[] {
  return footerItems.map((item) => {
    return {
      ...item,
      title: translate({ message: item.title }),
      items: item.items ? translateFooterNavLinks(item.items) : undefined,
    };
  });
}

function translateFooterNavLinks(footerNavLinks: any[]): FooterNavLink[] {
  return footerNavLinks.map((link) => {
    return {
      ...link,
      label: (
        <span>
          {translate({ message: link.label })}
          {link.icon && (
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '16px', // Match typical icon size
                verticalAlign: 'middle',
                marginLeft: '4px',
              }}
            >
              {link.icon}
            </span>
          )}
        </span>
      ) as unknown as string,
    };
  });
}

function Footer() {
  const { footerItems }: ThemeConfig = useThemeConfig();
  const { links, copyright, socialLinks, legalLinks, linksOfInterest } =
    footerItems as FooterItems;
  const translatedLinks = translateFooterItems(links);
  const translatedCopyright = `${new Date().getFullYear()} ${translate({
    message: copyright,
  })}`;
  const translatedSocialLinks = translateFooterItems([
    socialLinks,
  ])[0] as SocialLinks;
  const translatedLegalLinks = translateFooterNavLinks(legalLinks);
  const translatedLinksOfInterest = translateFooterItems([
    linksOfInterest,
  ])[0] as FooterLink;

  return (
    <div className="footer-custom-scope">
      <TDFooter
        links={translatedLinks}
        copyright={translatedCopyright}
        socialLinks={translatedSocialLinks}
        legalLinks={translatedLegalLinks}
        linksOfInterest={translatedLinksOfInterest}
      />
    </div>
  );
}

export default React.memo(Footer);
