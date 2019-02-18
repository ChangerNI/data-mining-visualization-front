import React, { Component } from 'react';
import {Select,Row,Col} from "antd";
import '../../node_modules/antd/dist/antd.css';
import '../styles/css/detail1.css'

class Detail1 extends Component {

  render() {
    return (
        <div className="condition-wrapper">
            <Row>
                <Col span={4}>

                </Col>
                <Col span={12}>
                    <div className="query-lists">
                        <div className="subject-balance-filter-left">
                            类别：<Select
                            value={"全部"}
                            style={{
                                width: 116,
                                marginRight: 15
                            }}
                            showSearch
                            allowClear={false}
                        >

                        </Select>
                        </div>
                        <div className="subject-balance-filter-left">
                            品名：<Select
                            value={"全部"}
                            style={{
                                width: 116,
                                marginRight: 15
                            }}
                            showSearch
                            allowClear={false}
                        >

                        </Select>
                        </div>
                        <div className="subject-balance-filter-left">
                            规格：<Select
                            value={"全部"}
                            style={{
                                width: 116,
                                marginRight: 15
                            }}
                            showSearch
                            allowClear={false}
                        >

                        </Select>
                        </div>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="filter-right">
                        <button type="button" className="ant-btn detail-btn">
                            <span>查 询</span>
                        </button>
                    </div>
                </Col>
                <Col span={4}>

                </Col>
            </Row>,
            <Row>
                <Col span={4}></Col>
                <Col span={16} className="detail-echart"></Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
  }
}

export default Detail1;
