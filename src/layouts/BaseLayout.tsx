import { Select } from 'antd';
import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import React, { useRef, useState } from 'react';
import { Link } from 'umi';
import { userTagList } from '@/services/ebbinghaus-web/tag';
import { TagOutlined } from '@ant-design/icons';

import './BaseLayout.less';
import MenuFooter from '@/layouts/components/MenuFooter';

export type BasicLayoutProps = {
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
} & ProLayoutProps;

const createTagMenu = (menus: any): MenuDataItem[] =>
  menus.map((item: API.TagResponse) => ({
    name: item.tagName,
    path: `/tag/index/${item.tagId}`,
    icon: <TagOutlined />,
    routes: item.children && createTagMenu(item.children),
  }));

const createTagOption = (tags: any) =>
  tags.map((item: API.TagResponse) => {
    return (
      <>
        {!item.children && (
          <Select.Option key={item.tagId} value={item.tagId}>
            {item.tagName}
          </Select.Option>
        )}
        {item.children && (
          <Select.OptGroup label={item.tagName}>
            {createTagOption(item.children)}
          </Select.OptGroup>
        )}
      </>
    );
  });

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  // 窗口高度
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const actionRef = useRef<{ reload: () => void }>();
  const {
    children,
    location = {
      pathname: '/',
    },
  } = props;

  window.onresize = () => setWindowHeight(window.innerHeight);

  return (
    <ProLayout
      {...props}
      actionRef={actionRef}
      collapsedButtonRender={false}
      contentStyle={{
        height: windowHeight,
      }}
      headerRender={false}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      layout={'side'}
      menu={{
        request: async () => {
          let tagResponse = await userTagList();
          return createTagMenu(tagResponse);
        },
      }}
      menuDataRender={menuDataRender}
      menuFooterRender={() => (
        <MenuFooter onAddTagFinish={() => actionRef.current?.reload()} />
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      navTheme={'light'}
      siderWidth={208}
      title={'Ebbinghaus'}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
