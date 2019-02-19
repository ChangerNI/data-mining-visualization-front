import React, { Component } from 'react';
import { Table,Pagination, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import reqwest from 'reqwest';

/* 分页的配置, 传入总条数, 页码, 页码条数*/
const PagingConfiguration = (totalCount, pageNo, pageSize, pageSizeOptions) => ({
    defaultCurrent: pageNo,
    defaultPageSize: pageSize,
    pageSize: pageSize,
    total: totalCount,
    current: pageNo,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: pageSizeOptions || [
        "10",
        "30",
        "50",
        "100"
    ],
    showTotal: () => <div>
        当前第 <span>{pageNo === 1 ? 1 : pageSize * (pageNo - 1)}</span> 到
        <span>{pageSize * pageNo >= totalCount ? totalCount : pageSize * pageNo}</span> 条，总共
        <span>{totalCount}</span> 条记录
    </div>

});

const columns = [{
    title: '品名',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: '最低价',
    dataIndex: 'lowest-price',
    width: '20%',
}, {
    title: '平均价',
    dataIndex: 'average-price',
},{
    title: '最高价',
    dataIndex: 'highest',
},{
    title: '规格',
    dataIndex: 'specification',
},{
    title: '单位',
    dataIndex: 'unit',
},{
    title: '发布日期',
    dataIndex: 'date',
}];

class TableContent extends Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
    };

    componentDidMount() {
        this.fetch();
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 100,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            pagination.total = data.totalCount;
            // pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
                pageNo: pagination.current,
                pageSize: pagination.pageSize
            });
        });
    }

    render() {
        const totalCount = 200;
        const pageNo = 0;
        const pageSize = 10;

        return (
            <LocaleProvider locale={zhCN}>
                <div>
                    <Table
                        columns={columns}
                        rowKey={record => record.login.uuid}
                        dataSource={this.state.data}
                        pagination={PagingConfiguration(totalCount, pageNo, pageSize,[10,30,50,100])}
                        loading={this.state.loading}
                        onChange={this.handleTableChange}
                        bodyStyle={{height: "720px"}}
                        locale={{emptyText: null}}
                    />
                </div>
            </LocaleProvider>
        );
    }
}

export default TableContent
