import React from 'react';
import { useParams, useRequest } from 'umi';
import { Descriptions } from 'antd';
import { selectLibraryById } from '@/services/ebbinghaus-web/library';

const Index: React.FC = () => {
  const params = useParams();
  let library = params as unknown as API.Library;
  const { data } = useRequest(() => selectLibraryById({ id: library.id }));
  return (
    <Descriptions title={data?.libraryName} layout="vertical" column={2}>
      <Descriptions.Item label="描述" span={3}>
        {data?.libraryDescription}
      </Descriptions.Item>
      <Descriptions.Item label="创建日期">{data?.createDate}</Descriptions.Item>
      <Descriptions.Item label="更新日期">{data?.updateDate}</Descriptions.Item>
    </Descriptions>
  );
};

export default Index;
