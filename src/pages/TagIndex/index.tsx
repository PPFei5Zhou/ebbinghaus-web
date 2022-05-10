import { message } from 'antd';
import React from 'react';
import FloatButton from './components/FloatButton';
import TagPageHeader from './components/TagPageHeader';

import './index.less';

const TagIndex: React.FC = () => {
  return (
    <>
      <TagPageHeader />
      <FloatButton onReload={() => message.info('reload card list')} />
    </>
  );
};

export default TagIndex;
