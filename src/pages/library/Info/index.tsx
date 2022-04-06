import { Button, Descriptions, Tabs } from 'antd';
import React, { useState } from 'react';
import { useParams, useRequest } from 'umi';
import { selectLibraryById } from '@/services/ebbinghaus-web/library';
import CustomDrawer from './CustomDrawer';
import CustomHeader from '@/pages/library/components/CustomHeader';

const { TabPane } = Tabs;

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
      <Tabs tabPosition={'left'}>
        <TabPane tab={'1'} key={'1'}>
          1
        </TabPane>
        <TabPane tab={'2'} key={'2'}>
          2
        </TabPane>
        <TabPane tab={'3'} key={'3'}>
          3
        </TabPane>
        <TabPane tab={'4'} key={'4'}>
          4
        </TabPane>
      </Tabs>
    </>
  );
};

export default Index;
