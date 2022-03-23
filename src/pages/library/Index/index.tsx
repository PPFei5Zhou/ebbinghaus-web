import {useRequest} from 'umi';
import {Table} from "antd";
import React from 'react';
import {selectLibrary} from '@/services/ebbinghaus-web/library';
import Header from './components/Header';
import TableDropdownMenu from "./components/TableDropdownMenu";

import './index.less';

const Index: React.FC = () => {
    const {run, loading, data, pagination} = useRequest<API.LibraryPaginateResponseBody>(
        ({current, pageSize, filters}) => {
            return selectLibrary({
                page: current,
                size: pageSize,
                libraryParentId: '-',
                ...filters
            })
        }, {
            paginated: true
        });

    const columns = [
        {
            title: '名称',
            dataIndex: 'libraryName',
            key: 'libraryName',
            className: 'library-name-style'
        },
        {
            title: '更新时间',
            dataIndex: 'updateDate',
            key: 'updateDate',
            className: 'update-date-style'
        },
        {
            dataIndex: 'id',
            key: 'tableDropdownMenu',
            render: (record: any) => {
                return (<TableDropdownMenu id={record} reload={reload}/>);
            },
        }
    ]

    const reload = (filters: API.LibraryRequestBody) => {
        run({
            current: 1,
            pageSize: pagination.pageSize,
            filters
        }).then();
    }

    const onRowClick = (record: any) => {

    }

    return (
        <>
            <Header reload={reload}/>
            <Table
                rowKey={'id'}
                columns={columns}
                dataSource={data?.list as any[]}
                pagination={pagination}
                loading={loading}
                onRow={record => {
                    return {
                        onClick: () => onRowClick(record)
                    }
                }}
                style={{
                    margin: "0 20px"
                }}
            />
        </>
    );
};

export default Index;
