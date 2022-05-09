import React, { useEffect, useState } from 'react';
import { Form, Input, Modal, Radio, TreeSelect } from 'antd';
import {
  CarryOutOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { insertTag, userTagList } from '@/services/ebbinghaus-web/tag';

const createTagTree = (menus: any): [] =>
  menus.map((item: API.TagResponse) => ({
    label: item.tagName,
    value: item.tagId,
    disabled: item.children && item.children.length != 0,
    children: item.children && createTagTree(item.children),
  }));

export type RadioGroupProps = {
  onAddTagFinish: () => void;
};

const MenuFooter: React.FC<RadioGroupProps> = (props) => {
  // React hooks
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [radioValue, setRadioValue] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [treeValue, setTreeValue] = useState();
  const [treeData, setTreeData] = useState<[]>();

  function fetchUserTag() {
    userTagList().then((value) => setTreeData(createTagTree(value)));
  }

  useEffect(() => {
    fetchUserTag();
  }, []);

  const [form] = Form.useForm();

  /** Radio group on change event */
  const radioOnChange = (e: any) => {
    setRadioValue(e.target.value);
    switch (e.target.value) {
      case 'AddTag': {
        setModalVisible(true);
        break;
      }
      default: {
        break;
      }
    }
  };

  /** Modal handle ok */
  const handleOk = () => {
    form.submit();

    setConfirmLoading(true);
    setTimeout(() => {
      fetchUserTag();
      setModalVisible(false);
      setConfirmLoading(false);
      setRadioValue(undefined); //清除选择项
    }, 1500);
  };

  /** Modal handle cancel */
  const handleCancel = () => {
    setModalVisible(false);
    setRadioValue(undefined); //清除选择项
  };

  const onFormFinish = (value: any) =>
    insertTag({
      id: '',
      tagName: value.tagName,
      parentId: value.parentId,
      userId: '',
    }).then(() => {
      props.onAddTagFinish();
    });

  return (
    <Radio.Group onChange={radioOnChange} value={radioValue}>
      <Radio.Button value={'AddTag'}>
        <PlusOutlined title={'添加标签'} />
        <Modal
          confirmLoading={confirmLoading}
          destroyOnClose={true}
          title="添加标签"
          visible={modalVisible}
          onCancel={handleCancel}
          onOk={handleOk}
        >
          <Form
            form={form}
            initialValues={{
              parentId: null,
            }}
            labelCol={{
              span: 4,
            }}
            onFinish={onFormFinish}
          >
            <Form.Item
              name={'tagName'}
              rules={[{ required: true, message: '标签名称不能为空' }]}
            >
              <Input placeholder={'标签名称'} />
            </Form.Item>
            <Form.Item label={'父标签'} name={'parentId'}>
              <TreeSelect
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                style={{ width: '100%' }}
                treeData={treeData}
                treeDefaultExpandAll={true} //默认展开所有树节点
                value={treeValue}
                onChange={(value) => setTreeValue(value)}
              />
            </Form.Item>
          </Form>
        </Modal>
      </Radio.Button>
      <Radio.Button value={'ReviewPlan'}>
        <CarryOutOutlined title={'计划'} />
      </Radio.Button>
      <Radio.Button value={'Help'}>
        <QuestionCircleOutlined title={'帮助'} />
      </Radio.Button>
      <Radio.Button value={'Setting'}>
        <SettingOutlined title={'设置'} />
      </Radio.Button>
    </Radio.Group>
  );
};

export default MenuFooter;
