import { Button, Drawer, Form, Input, Space } from 'antd';
import React from 'react';
import { useRequest } from 'umi';
import { insertLibrary } from '@/services/ebbinghaus-web/library';

export type AddLibraryFormProps = {
  visible: boolean;
  onReload: any;
  onClose: any;
};

const AddLibraryForm: React.FC<AddLibraryFormProps> = (
  props: AddLibraryFormProps,
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
      size={'default'}
      title={'新建知识库'}
      visible={props.visible}
      width={540}
    >
      <Form
        initialValues={{
          libraryParentId: '-',
          libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
        }}
        layout={'vertical'}
        form={form}
        onFinish={onFinish}
        preserve={false}
      >
        <Form.Item name="libraryName" label="名称" rules={[{ required: true }]}>
          <Input.TextArea showCount maxLength={100} rows={2} />
        </Form.Item>
        <Form.Item name="libraryDescription" label="描述">
          <Input.TextArea showCount maxLength={200} rows={3} />
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

export default AddLibraryForm;
