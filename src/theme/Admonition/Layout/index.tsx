import React, { ReactElement, type ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';

import type { Props } from '@theme/Admonition/Layout';

import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

function AdmonitionContainer({
  type,
  className,
  children,
}: Pick<Props, 'type' | 'className'> & { children: ReactNode }) {
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        styles.admonition,
        className
      )}
    >
      {children}
    </div>
  );
}

function AdmonitionHeading({ icon, title }: Pick<Props, 'icon' | 'title'>) {
  return (
    <div className={styles.admonitionHeading}>
      {icon && <span className={styles.admonitionIcon}>{icon}</span>}
      {title}
    </div>
  );
}

function AdmonitionContent({ children }: Pick<Props, 'children'>) {
  return children ? (
    <div className={styles.admonitionContent}>{children}</div>
  ) : null;
}

export default function AdmonitionLayout(props: Props): JSX.Element {
  const { type, icon, title, children, className } = props;
  const { props: titleProps } = title as ReactElement;
  const translatedTitle = <Translate id={`docs.${titleProps.children}`} />;

  return (
    <AdmonitionContainer
      type={type}
      className={clsx(className, styles.admonitionWrapper)}
    >
      <span className={styles.admonitionIcon}>{icon}</span>
      <span className={styles.admonitionContentWrapper}>
        <AdmonitionHeading title={translatedTitle} />
        <AdmonitionContent>{children}</AdmonitionContent>
      </span>
    </AdmonitionContainer>
  );
}
