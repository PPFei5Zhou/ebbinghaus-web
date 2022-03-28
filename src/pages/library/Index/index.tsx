import { Link, useRequest } from 'umi';
import { Button, Input, Table } from 'antd';
import React, { useState } from 'react';
import { selectLibrary } from '@/services/ebbinghaus-web/library';
import TableDropdownMenu from './components/TableDropdownMenu';
import AddLibraryForm from './components/AddLibraryForm';
import CustomHeader from '@/pages/library/components/CustomHeader';

import './index.less';

const { Search } = Input;

const Index: React.FC = () => {
  const [addLibraryFormVisible, setAddLibraryFormVisible] = useState(false);
  const { run, loading, data, pagination } =
    useRequest<API.LibraryPaginateResponseBody>(
      ({ current, pageSize, filters }) => {
        return selectLibrary({
          page: current,
          size: pageSize,
          libraryParentId: '-',
          ...filters,
        });
      },
      {
        paginated: true,
      },
    );

  const columns = [
    {
      title: '名称',
      dataIndex: 'libraryName',
      key: 'libraryName',
      className: 'library-name-style',
      render: (text: any, record: API.Library, _: any) => {
        return <Link to={`/library/info/${record.id}`}>{text}</Link>;
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updateDate',
      key: 'updateDate',
      className: 'update-date-style',
    },
    {
      dataIndex: 'id',
      key: 'tableDropdownMenu',
      render: (record: any) => {
        return <TableDropdownMenu id={record} reload={reload} />;
      },
    },
  ];

  const reload = (filters: API.LibraryRequestBody) => {
    run({
      current: 1,
      pageSize: pagination.pageSize,
      filters,
    }).then();
  };

  const onClick = () => {
    setAddLibraryFormVisible(true);
  };

  const extra = () => {
    return [
      <Button key="Create" onClick={onClick}>
        新增知识库
      </Button>,
      <Search
        key={'Search'}
        placeholder="搜索"
        onSearch={(value) => reload({ libraryName: value })}
        enterButton
        allowClear
      />,
    ];
  };

  return (
    <>
      <CustomHeader pageHeaderExtra={extra()} />
      <AddLibraryForm
        visible={addLibraryFormVisible}
        onClose={() => setAddLibraryFormVisible(false)}
        onReload={() => reload({})}
      />
      <Table
        rowKey={'id'}
        columns={columns}
        dataSource={data?.list as any[]}
        pagination={pagination}
        loading={loading}
        style={{
          margin: '0 20px',
        }}
      />
    </>
  );
};

export default Index;
