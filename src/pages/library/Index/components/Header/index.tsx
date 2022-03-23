import React, {useState} from "react";
import {useRequest} from 'umi';
import {Button, Drawer, PageHeader, Input, Form} from 'antd';

import './index.less';
import {insertLibrary} from "@/services/ebbinghaus-web/library";

const { Search } = Input;

export type HeaderProps = {
  reload(filters: API.LibraryRequestBody): void
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const [visible, setVisible] = useState(false);
    const {run} = useRequest(insertLibrary, {
        manual: true,
        onSuccess: ((data) => {
            props.reload({libraryName: data.libraryName});
        })
    })

  const AddLibraryForm = () => (
      <Form
          layout={'vertical'}
          onFinish={onFinish}
      >
          <Form.Item name="libraryName" label="名称" rules={[{ required: true }]}>
              <Input showCount maxLength={100}/>
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
                      backgroundColor: '#47c479'
                  }}
              >
                  新建
              </Button>
          </Form.Item>
      </Form>
  )

  const onFinish = (values: any) => {
      run(values).then(() => setVisible(false));
  }

  const showDrawer = () => {
    setVisible(true);
  }

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
        <PageHeader
            className="site-page-header"
            title="知识库"
            extra={[
                <Button
                    key="Create"
                    onClick={showDrawer}
                >
                    新增知识库
                </Button>,
                <Search
                    key={"Search"}
                    placeholder="搜索"
                    onSearch={(value => props.reload({libraryName: value}))}
                    enterButton
                    allowClear
                />
            ]}
        />
    </>
  );
}

export default Header;
