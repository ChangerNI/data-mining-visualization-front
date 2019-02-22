import React, { Component } from 'react';
import { Table,Pagination, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import reqwest from 'reqwest';
import $ from 'jquery';

/* 分页的配置, 传入总条数, 页码, 页码条数*/
const PagingConfiguration = (totalCount, pageNo, pageSize, pageSizeOptions) => ({
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSize: pageSize,
    total: totalCount,
    current: pageNo,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: pageSizeOptions,
    showTotal: () => <div>
        当前第 <span>{pageNo === 1 ? 1 : pageSize * (pageNo - 1)}</span> 到
        <span>{pageSize * pageNo >= totalCount ? totalCount : pageSize * pageNo}</span> 条，总共
        <span>{totalCount}</span> 条记录
    </div>

});

const columns = [{
    title: '品名',
    dataIndex: 'productName',
    width: '14%',
}, {
    title: '最低价',
    dataIndex: 'minPrice',
    width: '14%',
}, {
    title: '平均价',
    dataIndex: 'avgPrice',
    width: '14%',
},{
    title: '最高价',
    dataIndex: 'maxPrice',
    width: '14%',
},{
    title: '规格',
    dataIndex: 'sizeType',
    width: '14%',
},{
    title: '单位',
    dataIndex: 'unit',
    width: '14%',
},{
    title: '发布日期',
    dataIndex: 'dateTime',
}];

class TableContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            pageNum: 1,
            pageSize: 10,
            totalCount: "",
            productType: "vegetable"
        };
    }

    componentDidMount() {
        this.fetch();
        $('.vegetables').click(
            () => {
                this.setState({
                    productType: "vegetable",
                    pageNum: 1
                });
                this.fetch();
            });
        $('.fruit').click(
            () => {
            this.setState({
                productType: "fruit",
                pageNum: 1
            });
            this.fetch();
        });
        $('.meat').click(
            () => {
            this.setState({
                productType: "meat"
            });
            this.fetch();
        });
        $('.oil').click(
            () => {
            this.setState({
                productType: "oil"
            });
            this.fetch();
        });
        $('.aquatic').click(
            () => {
            this.setState({
                productType: "aquatic"
            });
            this.fetch();
        });
        console.log(this.state.productType);
    }

    handleTableChange = (pagination, filters) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            pageSize: pagination.pageSize,
            pageNum: pagination.current,
            ...filters,
        });
    }

    fetch = (params = {}) => {
        this.setState({ loading: true});
        reqwest({
            url: 'http://10.202.0.7:8080/data-mining/product/query',
            method: 'post',
            data: {
                ...params,
                productType: this.state.productType,
            },
            type: 'json',
        }).then((data) => {
            console.log(data)
            const pagination = { ...this.state.pagination };
            // Read total count from server
            pagination.total = data.data.total;
            // pagination.total = 200;
            this.setState({
                loading: false,
                data: data.data.list,
                pagination,
                pageNum: pagination.current,
                pageSize: pagination.pageSize,
                totalCount: data.data.total
            });
        });
    }

    render() {
        const {totalCount,pageNum,pageSize} = this.state;
        if(typeof(pageNum)!=="number"){
            console.log('3333')
            this.setState({
                pageNum: 1,
                pageSize: 10
            })
        }
        console.log(pageNum,pageSize)

        return (
            <LocaleProvider locale={zhCN}>
                <div>
                    <Table
                        columns={columns}
                        rowKey={record => record.id}
                        dataSource={this.state.data}
                        pagination={PagingConfiguration(totalCount, pageNum, pageSize,[10,30,50,100])}
                        loading={this.state.loading}
                        onChange={this.handleTableChange}
                        scroll={{y: document.body.clientHeight - 306}}
                        bodyStyle={{height: "720px"}}
                        locale={{emptyText: null}}
                    />
                </div>
            </LocaleProvider>
        );
    }
}

export default TableContent
