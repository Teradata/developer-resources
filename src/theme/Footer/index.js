import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { Footer as TDFooter } from '@bsahitya/td-doc-design';

function Footer() {
  const { footerItems } = useThemeConfig();
  if (!footerItems) {
    return null;
  }
  const { links, copyright, socialLinks, legalLinks } = footerItems;

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
