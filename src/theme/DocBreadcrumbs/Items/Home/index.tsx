import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

export default function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl('/');
  const activePlugin = useActivePlugin(undefined);
  const homeLabel = translate({
    id: 'theme.docs.breadcrumbs.home',
    message: 'Home',
  });
  const docsLabel = translate({
    id: `theme.docs.breadcrumbs.${activePlugin?.pluginId}`,
    message: 'AI Unlimited',
  });  
  return (
    <>
      <li className="breadcrumbs__item">
        <Link
          aria-label={homeLabel}
          className="breadcrumbs__link"
          href={homeHref}
        >{homeLabel}</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link
          aria-label={docsLabel}
          className="breadcrumbs__link"
          href={activePlugin?.pluginData.path}
        >
          {docsLabel}
        </Link>
      </li>
    </>
  );
}
