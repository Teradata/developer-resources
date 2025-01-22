import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type { WrapperProps } from '@docusaurus/types';
import './styles.css';
import SelectComponent from '../../components/SelectComponent/SelectComponent';

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): JSX.Element {
  return (
    <>
      <div className="customContainer">
        <SelectComponent/>
      </div>
      <DocSidebar {...props} />
    </>
  );
}