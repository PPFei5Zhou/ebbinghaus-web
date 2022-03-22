import {useRequest} from 'umi';
import React from 'react';
import {selectLibrary} from '@/services/ebbinghaus-web/library';
import Header from './components/Header';
import {Table} from "antd";

const columns = [
  {
    title: '名称',
    dataIndex: 'libraryName',
    key: 'libraryName'
  },
  {
    title: '更新时间',
    dataIndex: 'updateDate',
    key: 'updateDate'
  }
]

const Index: React.FC = () => {
  const {run, loading, data, pagination} = useRequest<API.LibraryPaginateResponseBody>(
    ({current, pageSize, filters}) => {
      return selectLibrary({
        page: current,
        size: pageSize,
        ...filters
      })
    }, {
      paginated: true
    });

  const onSearch = (value: String) => {
    run({
      current: 1,
      pageSize: pagination.pageSize,
      filters: {
        libraryName: value
      }});
  }

  return (
    <>
      <Header onSearch={onSearch}/>
      <Table
        rowKey={'id'}
        columns={columns}
        dataSource={data?.list as any[]}
        pagination={pagination}
        loading={loading}
        style={{
          margin: "0 20px"
        }}
      />
    </>
  );
};

export default Index;
