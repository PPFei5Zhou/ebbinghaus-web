import { PageHeader } from 'antd';
import React, { ReactNode } from 'react';
import { history } from 'umi';

import './index.less';

export type HeaderProps = {
  headerTitle?: string;
  showGoBack?: boolean;
  showSearch?: boolean;
  headerNode?: ReactNode;
  pageHeaderExtra?: ReactNode;
};

const CustomHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  const showGoBackHeader = () => {
    if (props.showGoBack)
      return (
        <PageHeader
          className="site-page-header"
          title={props.headerTitle || '知识库'}
          onBack={() => history.goBack()}
          extra={props.pageHeaderExtra}
        >
          {props.headerNode}
        </PageHeader>
      );

    return (
      <PageHeader
        className="site-page-header"
        title={props.headerTitle || '知识库'}
        extra={props.pageHeaderExtra}
      >
        {props.headerNode}
      </PageHeader>
    );
  };

  return <>{showGoBackHeader()}</>;
};

export default CustomHeader;
