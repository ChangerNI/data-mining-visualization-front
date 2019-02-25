import React, { Component } from 'react';
import {Button, Col, Row} from "antd";
import '../../node_modules/antd/dist/antd.css';
import '../styles/css/detail1.css'
import axios from "axios";
import qs from "qs";
import $ from "jquery";

class Detail2 extends Component {
    sendRequest = () => {
        axios.post('http://10.202.0.6:8080/data-mining/product/spider',qs.stringify({

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
                <Col span={16} className="detail2-echart" id="log-cat"></Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
  }
}

export default Detail2;
