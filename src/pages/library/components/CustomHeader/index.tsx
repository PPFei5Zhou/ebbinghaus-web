import { Button, Drawer, PageHeader, Input, Form } from 'antd';
import React, { ReactNode, useState } from 'react';
import { history, useRequest } from 'umi';
import { insertLibrary } from '@/services/ebbinghaus-web/library';

import './index.less';

const { Search } = Input;

export type HeaderProps = {
  headerTitle?: string;
  showGoBack?: boolean;
  showSearch?: boolean;
  reload(filters: API.LibraryRequestBody): void;
  headerNode?: ReactNode;
};

const CustomHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [visible, setVisible] = useState(false);
  const { run } = useRequest(insertLibrary, {
    manual: true,
    onSuccess: () => {
      props.reload({});
    },
  });

  const AddLibraryForm = () => (
    <Form layout={'vertical'} onFinish={onFinish}>
      <Form.Item name="libraryName" label="名称" rules={[{ required: true }]}>
        <Input showCount maxLength={100} />
      </Form.Item>
      <Form.Item name="libraryDescription" label="描述">
        <Input.TextArea showCount maxLength={200} rows={3} />
      </Form.Item>
      <Form.Item>
        <Button
          block
          htmlType={'submit'}
          style={{
            color: 'white',
            backgroundColor: '#47c479',
          }}
        >
          新建
        </Button>
      </Form.Item>
    </Form>
  );

  function extra(): ReactNode {
    if (props.showSearch)
      return [
        <Button key="Create" onClick={showDrawer}>
          新增知识库
        </Button>,
        <Search
          key={'Search'}
          placeholder="搜索"
          onSearch={(value) => props.reload({ libraryName: value })}
          enterButton
          allowClear
        />,
      ];

    return [
      <Button key="Create" onClick={showDrawer}>
        新增知识库
      </Button>,
    ];
  }

  const showGoBackHeader = () => {
    if (props.showGoBack)
      return (
        <PageHeader
          className="site-page-header"
          title={props.headerTitle || '知识库'}
          onBack={() => history.goBack()}
          extra={extra()}
        >
          {props.headerNode}
        </PageHeader>
      );

    return (
      <PageHeader
        className="site-page-header"
        title={props.headerTitle || '知识库'}
        extra={extra()}
      >
        {props.headerNode}
      </PageHeader>
    );
  };

  const onFinish = (values: any) => {
    run(values).then(() => setVisible(false));
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        size={'default'}
        title={'新建知识库'}
        placement={'top'}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={'top'}
      >
        <AddLibraryForm />
      </Drawer>
      {showGoBackHeader()}
    </>
  );
};

export default CustomHeader;
