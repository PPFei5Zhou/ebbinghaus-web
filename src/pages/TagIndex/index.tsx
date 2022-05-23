import { findAllCardBy } from '@/services/ebbinghaus-web/card';
import { message } from 'antd';
import React, { useState, useEffect } from 'react';
import FloatButton from './components/FloatButton';
import TagCardList from './components/TagCardList';
import TagPageHeader from './components/TagPageHeader';

import './index.less';

const TagIndex: React.FC = () => {
  const [dataSource, setDataSource] = useState<API.CardResponseBody[]>();

  useEffect(() => {
    fetchCardList();
  }, []);

  const fetchCardList = () => {
    findAllCardBy({})
      .then((value) => {
        setDataSource(value);
      })
      .catch(() => {
        setDataSource(undefined);
      });
  };

  return (
    <>
      <TagPageHeader />
      <TagCardList dataSource={dataSource} />
      <FloatButton onReload={() => fetchCardList()} />
    </>
  );
};

export default TagIndex;
