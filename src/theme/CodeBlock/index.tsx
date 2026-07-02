import React, { isValidElement } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
} from '@docusaurus/theme-common/internal';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
  const normalized = language?.toLowerCase();
  const languageAliases = {
    powershell: 'shell',
    ps1: 'shell',
    csv: 'plaintext',
  };

  return languageAliases[normalized] ?? normalized;
}
/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */
function maybeStringifyChildren(children) {
  if (React.Children.toArray(children).some((el) => isValidElement(el))) {
    return children;
  }
  // The children is now guaranteed to be one/more plain strings
  return Array.isArray(children) ? children.join('') : children;
}
export default function CodeBlock({ children: rawChildren, ...props }) {
  // The Prism theme on SSR is always the default theme but the site theme can
  // be in a different mode. React hydration doesn't update DOM styles that come
  // from SSR. Hence force a re-render after mounting to apply the current
  // relevant styles.
  const {
    className: blockClassName = '',
    metastring,
    title: titleProp,
    language: languageProp,
  } = props;
  const isBrowser = useIsBrowser();
  const children = maybeStringifyChildren(rawChildren);
  const codeContent = typeof children === 'string' ? children : String(children ?? '');
  const {
    prism: { defaultLanguage },
  } = useThemeConfig();
  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage
  );

  const title = parseCodeBlockTitle(metastring) || titleProp;

  return (
    <BrowserOnly
      fallback={
        <pre>
          <code className={language ? `language-${language}` : undefined}>
            {codeContent}
          </code>
        </pre>
      }
    >
      {() => {
        // Need to dynamically import the component to render it after the react app has hydrated
        const CodeSnippet =
          require('@teradata-web/react-components')?.CodeSnippet;
        return CodeSnippet ? (
          <CodeSnippet
            key={`${isBrowser}`}
            label={title}
            maxHeight={0}
            language={language || 'text'}
            content={codeContent}
            hideHeader={!title}
          >
            <span>{codeContent}</span>
          </CodeSnippet>
        ) : (
          <></>
        );
      }}
    </BrowserOnly>
  );
}
