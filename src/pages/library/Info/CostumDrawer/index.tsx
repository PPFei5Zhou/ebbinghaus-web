import { Button, Drawer, Form, Input, Space } from 'antd';
import React from 'react';
import { useRequest } from '@@/plugin-request/request';
import { insertLibrary } from '@/services/ebbinghaus-web/library';

export type CostumDrawerProps = {
  title: string;
  parentId: string;
  visible?: boolean;
  onClose: any;
  onReload: any;
};

const CostumDrawer: React.FC<CostumDrawerProps> = (
  props: CostumDrawerProps,
) => {
  const [form] = Form.useForm();
  const { run } = useRequest(insertLibrary, {
    manual: true,
    onSuccess: () => {
      props.onReload({});
      props.onClose();
    },
  });

  const onFinish = (values: any) => {
    run(values).then();
  };

  return (
    <Drawer
      closable={false}
      destroyOnClose={true}
      extra={
        <Space>
          <Button onClick={props.onClose}>取消</Button>
          <Button onClick={() => form.submit()} type="primary">
            提交
          </Button>
        </Space>
      }
      key={'drawer'}
      onClose={props.onClose}
      placement={'right'}
      title={props.title}
      visible={props.visible}
      width={540}
    >
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          libraryParentId: props.parentId,
          libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
        }}
      >
        <Form.Item name="libraryName" label="" rules={[{ required: true }]}>
          <Input.TextArea showCount maxLength={100} rows={2} />
        </Form.Item>
        <Form.Item name="libraryParentId">
          <Input hidden={true} />
        </Form.Item>
        <Form.Item name="libraryOwnerId">
          <Input hidden={true} />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default CostumDrawer;
