import { PageHeader, Input } from 'antd';
import React from "react";

import './index.less';

const { Search } = Input;

export type HeaderProps = {
  onSearch(value: String): any
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <PageHeader
      className="site-page-header"
      title="知识库"
      extra={[
        <Search
          key={"Search"}
          placeholder="搜索"
          onSearch={props.onSearch}
          enterButton
          allowClear
        />
      ]}
    />
  );
}

export default Header;
