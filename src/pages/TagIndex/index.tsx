import { findAllCardBy } from '@/services/ebbinghaus-web/card';
import React, { useState, useEffect } from 'react';
import FloatButton from './components/FloatButton';
import TagCardList from './components/TagCardList';
import TagPageHeader from './components/TagPageHeader';
import { useParams } from 'umi';

import './index.less';
import { findTagById } from '@/services/ebbinghaus-web/tag';

const TagIndex: React.FC = () => {
  const params = useParams();
  const param = params as unknown as { id: string };
  const [tag, setTag] = useState<API.TagResponse>();
  const [dataSource, setDataSource] = useState<API.CardResponseBody[]>();

  useEffect(() => {
    fetchTagInfo();
    fetchCardList();
  }, [params]);

  const fetchTagInfo = () => {
    findTagById({ id: param.id })
      .then((value) => {
        setTag(value);
      })
      .catch(() => {
        setDataSource(undefined);
      });
  };

  const fetchCardList = () => {
    findAllCardBy({
      tagId: param.id,
    })
      .then((value) => {
        setDataSource(value);
      })
      .catch(() => {
        setDataSource(undefined);
      });
  };

  return (
    <>
      <TagPageHeader tag={tag} />
      <TagCardList dataSource={dataSource} />
      <FloatButton onReload={() => fetchCardList()} />
    </>
  );
};

export default TagIndex;
