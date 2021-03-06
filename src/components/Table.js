import React, { Component } from 'react';
import { Table,Pagination, LocaleProvider } from 'antd';
import DetailLine from "./DetailLine";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import reqwest from 'reqwest';
import $ from 'jquery';
import {url} from '../config/api';

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
            productType: "vegetable",
            minPrice: [],
            avgPrice: [],
            maxPrice: [],
            dateTime: [],
            productName: []
        };
    }

    componentDidMount() {
        this.fetch();
        $('.vegetables').click(
            () => {
                $('#sub-header').text("蔬菜价格详情");
                this.setState({
                    productType: "vegetable",
                    pageNum: 1
                });
                this.fetch();
            });
        $('.fruit').click(
            () => {
            $('#sub-header').text("水果价格详情");
            this.setState({
                productType: "fruit",
                pageNum: 1
            });
            this.fetch();
        });
        $('.meat').click(
            () => {
                $('#sub-header').text("肉禽蛋价格详情");
            this.setState({
                productType: "meat"
            });
            this.fetch();
        });
        $('.oil').click(
            () => {
                $('#sub-header').text("粮油价格详情");
            this.setState({
                productType: "oil"
            });
            this.fetch();
        });
        $('.aquatic').click(
            () => {
                $('#sub-header').text("水产价格详情");
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
            url: url + '/product/query',
            method: 'post',
            data: {
                ...params,
                productType: this.state.productType,
            },
            type: 'json',
        }).then((data) => {
            console.log(data);
            let min = [];
            let avg = [];
            let max = [];
            let name = [];
            for(let i=0;i<data.data.list.length;i++){
                min.push(data.data.list[i].minPrice);
                avg.push(data.data.list[i].avgPrice);
                max.push(data.data.list[i].maxPrice);
                name.push(data.data.list[i].productName);
            }
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
                totalCount: data.data.total,
                minPrice: min,
                avgPrice: avg,
                maxPrice: max,
                productName: name
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
                    <DetailLine minPrice={this.state.minPrice} avgPrice={this.state.avgPrice} maxPrice={this.state.maxPrice} productName={this.state.productName}/>
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
