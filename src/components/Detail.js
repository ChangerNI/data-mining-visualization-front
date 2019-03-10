import React, { Component } from 'react';
import '../styles/css/ie10-viewport-bug-workaround.css';
import '../styles/css/dashboard.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/css/bootstrap-table.css';
import '../../node_modules/antd/dist/antd.css';
import TableContent from './Table';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Detail extends Component {

    state = {
        productType: "vegetable"
    }
    componentDidMount = () => {

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
