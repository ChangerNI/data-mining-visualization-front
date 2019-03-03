import React, { Component } from 'react';
import {Select,Row,Col} from "antd";
import '../../node_modules/antd/dist/antd.css';
import '../styles/css/detail1.css'
import qs from "qs";
import axios from "axios/index";

class Detail1 extends Component {
    constructor (props) {

        super(props);
        this.state = {
            productArray: [],
        }
    }

    componentDidMount = () => {
        this.queryProduct().then((result) => {

            this.setState({productArray: result});
            console.log(result);

        });
    }

    queryProduct = async function () {
        const result = axios.post('http://192.168.1.87:8080/data-mining/product/enum',qs.stringify({}));

        return result;

    }

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
