import React, { Component } from 'react';
import '../styles/css/ie10-viewport-bug-workaround.css';
import '../styles/css/dashboard.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/css/bootstrap-table.css';
import '../../node_modules/antd/dist/antd.css';
import $ from 'jquery';
import TableContent from './Table';

class Detail extends Component {

    //查询按钮事件
    // showVegetables = () => {
    //     $('#mytab').bootstrapTable('refresh', {
    //         url : 'user/getUserListPage'
    //     });
    // }

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
                                <div className="col-xs-6 col-sm-2 placeholder lists">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4 onClick={this.showVegetables}>蔬菜</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4>水果</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4>肉类</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                        <h4>水产</h4>

                                </div>
                                <div className="col-xs-6 col-sm-2 placeholder lists">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        width="200" height="200" className="img-responsive"
                                        alt="Generic placeholder thumbnail" />
                                    <h4>粮油</h4>

                                </div>
                            </div>
                            <div className="row" style={{"height":"400px","border":"1px solid #ccc"}}></div>

                            <h2 className="sub-header">Section title</h2>
                            <div className="table-responsive">
                                {/*<table className="table table-striped table-bordered table-hover" id="tableL01">*/}

                                {/*</table>*/}
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
