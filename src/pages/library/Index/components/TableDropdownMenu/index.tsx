import { useRequest } from 'umi';
import { Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import React from 'react';
import { deleteLibraryById } from '@/services/ebbinghaus-web/library';

export type TableDropdownMenuProps = {
  id: string;
  reload(filters: API.LibraryRequestBody): void;
};

const Index: React.FC<TableDropdownMenuProps> = (
  props: TableDropdownMenuProps,
) => {
  const { run } = useRequest(() => deleteLibraryById({ id: props.id }), {
    manual: true,
    onSuccess: () => {
      props.reload({});
    },
  });

  const onClick = ({ key }: any) => {
    switch (key) {
      case 'delete': {
        run().then();
        break;
      }
      case 'setting': {
        break;
      }
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key={'setting'}>设置</Menu.Item>
      <Menu.Item danger key={'delete'}>
        删除
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <MoreOutlined />
      </a>
    </Dropdown>
  );
};

export default Index;
