import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
} from '@docusaurus/theme-common/internal';
import { CodeSnippet } from '@bsahitya/td-doc-design';

// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
  return language?.toLowerCase();
}
export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  language: languageProp,
}) {
  const {
    prism: { defaultLanguage },
  } = useThemeConfig();
  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage
  );

  const title = parseCodeBlockTitle(metastring) || titleProp;

  return (
    <CodeSnippet
      key={title}
      label={title}
      maxHeight={0}
      language={language || 'text'}
      content={children}
      hideHeader={!title}
    ></CodeSnippet>
  );
}
