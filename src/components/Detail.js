import React, { Component } from 'react';
import '../styles/css/ie10-viewport-bug-workaround.css';
import '../styles/css/dashboard.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/css/bootstrap-table.css';
import '../../node_modules/antd/dist/antd.css';
import $ from 'jquery';
import TableContent from './Table';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import axios from "axios";
import qs from "qs";

class Detail extends Component {

    state = {
        productType: "vegetable"
    }
    componentDidMount = () => {
        //基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        //指定图表的配置项和数据
        var option = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        //使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
    }


    render() {
        return (
            <div id="detail">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Project name</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Help</a></li>
                            </ul>
                            <form className="navbar-form navbar-right">
                                <input type="text" className="form-control" placeholder="Search..." />
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-1 col-md-2">

                        </div>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1 className="page-header">Dashboard</h1>

                            <div className="row placeholders">
                                <div className="col-xs-6 col-sm-2 placeholder lists vegetables">
                                    <img
                                        src={require("../styles/img/vegetable.png")}
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4>蔬菜</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists fruit" >
                                    <img
                                        src={require("../styles/img/fruit.png")}
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4>水果</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists meat" >
                                    <img
                                        src={require("../styles/img/meat.png")}
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4>肉类</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists aquatic">
                                    <img
                                        src={require("../styles/img/aquatic.png")}
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4>水产</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists oil">
                                    <img
                                        src={require("../styles/img/oil.png")}
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                    <h4>粮油</h4>

                                </div>
                            </div>
                            <div id="main" className="row" style={{"height":"400px","border":"1px solid #ccc"}}>

                            </div>

                            <h2 className="sub-header">Section title</h2>
                            <div className="table-responsive">
                                <TableContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
