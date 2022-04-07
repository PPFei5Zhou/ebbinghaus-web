import { Button, Descriptions } from 'antd';
import React, { useState } from 'react';
import { useParams, useRequest } from 'umi';
import { selectLibraryById } from '@/services/ebbinghaus-web/library';
import CustomDrawer from './CustomDrawer';
import CustomHeader from '@/pages/library/components/CustomHeader';
import CustomCollapse from '@/pages/library/Info/CustomCollapse';

const Index: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const params = useParams();
  let library = params as unknown as API.Library;
  const { run, data } = useRequest(() => selectLibraryById({ id: library.id }));

  const description = () => {
    return (
      <Descriptions layout="vertical" column={2}>
        <Descriptions.Item span={2}>
          {data?.libraryDescription}
        </Descriptions.Item>
        <Descriptions.Item label="创建日期">
          {data?.createDate}
        </Descriptions.Item>
        <Descriptions.Item label="更新日期">
          {data?.updateDate}
        </Descriptions.Item>
      </Descriptions>
    );
  };

  const extra = () => {
    return [<Button onClick={() => setDrawerVisible(true)}>新增组</Button>];
  };

  return (
    <>
      <CustomHeader
        headerTitle={data?.libraryName}
        showGoBack={true}
        headerNode={description()}
        pageHeaderExtra={extra()}
      />
      <CustomDrawer
        parentId={data?.id}
        onClose={() => setDrawerVisible(false)}
        onReload={() => run()}
        title={'新增组'}
        visible={drawerVisible}
      />
      <CustomCollapse />
    </>
  );
};

export default Index;
