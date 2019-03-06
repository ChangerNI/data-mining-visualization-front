import React, { Component } from 'react';
import {Button, Col, Row} from "antd";
import '../../node_modules/antd/dist/antd.css';
import '../styles/css/detail1.css'
import axios from "axios";
import qs from "qs";
import $ from "jquery";
import {subscribeToTimer} from "../config/subscribeToTimer";

class Detail2 extends Component {
    constructor(props) {
        super(props);
        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));
    }
    state = { timestamp: 'no timestamp yet' }
    sendRequest = () => {
        axios.post('http://10.202.0.8:8080/data-mining/product/spider',qs.stringify({

        })).then(res=>{
            $('#log-cat').append("<span class='insert-data'>"+res.data.message+"</span>");
            console.log(res);
        })
    }

  render() {
    return (
        <div className="detail2">
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Button type="primary" className="btn-request" onClick={this.sendRequest}>请求数据</Button>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={16} className="detail2-echart" id="log-cat">This is the timer value: {this.state.timestamp}</Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
  }
}

export default Detail2;
