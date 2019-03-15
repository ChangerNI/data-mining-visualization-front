import React, { Component } from 'react';
import {Button, Col, Row} from "antd";
import '../../node_modules/antd/dist/antd.css';
import '../styles/css/detail1.css';
import '../styles/css/detail2.css';
import '../styles/css/bootstrap.min1.css';
import axios from "axios";
import qs from "qs";
import $ from "jquery";
import {url} from '../config/api';

class Detail2 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let height = window.innerHeight;
        $('#detail2').css("height",height);
    }

    sendRequest = () => {
        $('#log-cat').append("<span class='insert-data'>"+"数据加载中，请稍后..."+"</span>");
        axios.post(url + '/product/spider',qs.stringify({

        })).then(res=>{
            $('#log-cat').append("<span id='last-data' class='insert-data'>"+"数据请求完毕！"+"</span>");
        })
    }

  render() {
    return (
        <div className="detail2" id="detail2">
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <div className="progress">
                        <div id="progress" className="progress-bar progress-bar-info progress-bar-striped active"
                        >
                            <div id="progress-value" className="progress-value">0%</div>
                        </div>
                    </div>
                    <Button type="primary" className="btn-request" onClick={this.sendRequest}>请求数据</Button>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={16} className="detail2-echart" id="log-cat"></Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
  }
}

export default Detail2;
