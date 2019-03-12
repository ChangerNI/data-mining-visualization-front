import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Index from './Index';
import Detail from './Detail';
import Detail1 from './Detail1';
import Detail2 from './Detail2';
import '../styles/css/guide.css';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class Guide extends Component {
    componentDidMount = () => {
        $('.type-left ul li').click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
        })
        $('.type-right').click(function(){
            $(this).prev('.type-left').toggleClass('showListType');
        });
    }

  render() {
    return (
        <Router history = {history}>
            <div>
                <div className="app-box">
                    <div className="change-type">
                        <div className="type-left">
                            <ul>
                                <li id="first_index" className="active"><Link to="/index">首页</Link><span></span></li>
                                <li><Link to="/detail">detail1</Link><span></span></li>
                                <li><Link to="/detail1">detail2</Link><span></span></li>
                                <li id="btnConnection"><Link to="/detail2">detail3</Link><span></span></li>
                            </ul>
                        </div>
                        <div className="type-right">
                            <p>
                                <i className="el-icon-menu"></i>
                                导航栏
                            </p>
                        </div>
                    </div>
                    <div className="con">
                        <Route exact path="/index" component={Index}/>
                        <Route path="/detail" component={Detail}/>
                        <Route path="/detail1" component={Detail1}/>
                        <Route path="/detail2" component={Detail2}/>
                    </div>
                </div>
            </div>


        </Router>
    );
  }
}

export default Guide;
