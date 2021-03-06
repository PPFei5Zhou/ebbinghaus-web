import { Button, Modal, Input } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { insertCard } from '@/services/ebbinghaus-web/card';
import { useParams } from 'umi';

export type FloatButtonProps = {
  onReload: () => void;
};

const FloatButton: React.FC<FloatButtonProps> = (props: FloatButtonProps) => {
  const params = useParams();
  const param = params as unknown as { id: string };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputCardName, setInputCardName] = useState('');
  const [inputContent, setInputContent] = useState('');

  const onClick = () => setIsModalVisible(true);
  const handleOk = () => {
    insertCard({
      id: '',
      cardName: inputCardName,
      tagId: param.id,
      createAt: '',
      content: [
        {
          content: inputContent,
        },
      ],
    })
      .then(() => {
        props.onReload();
      })
      .finally(() => {
        setIsModalVisible(false);
      });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="新增卡片"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          maxLength={100}
          showCount={true}
          placeholder="标题"
          value={inputCardName}
          onChange={(e) => setInputCardName(e.target.value)}
        />
        <Input.TextArea
          rows={4}
          maxLength={100}
          placeholder="内容"
          showCount={true}
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
      </Modal>
      <div
        style={{
          textAlign: 'center',
          fontSize: 14,
          bottom: 35,
          right: 35,
          position: 'fixed',
        }}
      >
        <Button
          icon={<PlusOutlined />}
          shape="circle"
          size="large"
          type="primary"
          onClick={onClick}
        ></Button>
      </div>
    </>
  );
};

export default FloatButton;
