import React, { Component } from 'react';
import {Select,Row,Col,Form} from "antd";
import '../../node_modules/antd/dist/antd.css';
import '../styles/css/detail1.css'
import qs from "qs";
import axios from "axios/index";
import echarts from "echarts/lib/echarts";
// 引入折线图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/map/js/china';
const Option = Select.Option;


export const productData = () => [
    {
        key: "v",
        value: "蔬菜"
    },
    {
        key: "f",
        value: "水果"
    },
    {
        key: "m",
        value: "肉类"
    },
    {
        key: "o",
        value: "粮油"
    },
    {
        key: "a",
        value: "水产"
    }
];

const productTypes = ['蔬菜','水果','肉类','水产','粮油'];

class Detail1 extends Component {
    constructor (props) {

        super(props);
        this.state = {
            productArray: [],
            productType: [],
            vegetableList: [],
            fruitList: [],
            meatList: [],
            oilList: [],
            aquaticList: [],
            showProduct: [],
            productNames: "",
            productName: "",
            productSizes: ""
        }
    }

    componentDidMount = () => {
        var myChart = echarts.init(document.getElementById('showPrice'));
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };

        myChart.setOption(option);
        axios.post('http://10.202.0.8:8080/data-mining/product/enum',qs.stringify({
        })).then((res) => {

            console.log(res.data.data);

            let type = res.data.data;
            let vegetableList = [];
            let meatList = [];
            let fruitList = [];
            let aquaticList = [];
            let oilList = [];
            for(let i=0;i<type[0].children.length;i++){
                vegetableList.push({name:type[0].children[i].value,size:type[0].children[i].children[0].value});
            }
            console.log(vegetableList)
            for(let i=0;i<type[1].children.length;i++){
                meatList.push({name:type[1].children[i].value,size:type[1].children[i].children[0].value});
            }
            for(let i=0;i<type[2].children.length;i++){
                fruitList.push({name:type[2].children[i].value,size:type[2].children[i].children[0].value});
            }
            for(let i=0;i<type[3].children.length;i++){
                aquaticList.push({name:type[3].children[i].value,size:type[3].children[i].children[0].value});
            }
            for(let i=0;i<type[4].children.length;i++){
                oilList.push({name:type[4].children[i].value,size:type[4].children[i].children[0].value});
            }

            const productNames = {
                '蔬菜': vegetableList,
                '水果': fruitList,
                '肉类': meatList,
                '水产': aquaticList,
                '粮油': oilList
            }

            this.setState({
                productNames: productNames
            })

        })
    }

    handleTypeChange = (value) => {
        this.setState({
            productType: ""
        });
    }

    handleNameChange = (value) => {
        this.setState({
            productName: value,
        });
    }

    clearChange = () => {
        this.setState({
            productName: "",
        });
    }

  render() {
      const {productType} = this.state;
      let productSize = [];
      for(let i=0;i<productType.length;i++){
          productSize.push(productType[i].size);
      }
      let productSizeList = productSize.filter(function(ele,index,self){
          return self.indexOf(ele) === index;
      })

    return (
        <div className="condition-wrapper">
            <Row>
                <Col span={4}>
                </Col>
                <Col span={12}>
                    <div className="query-lists">
                        <div className="subject-balance-filter-left">
                            类别：<Select
                            style={{
                                width: 116,
                                marginRight: 15
                            }}
                            showSearch
                            onChange={this.handleTypeChange}
                            onBlur={this.clearChange}
                            allowClear={false}
                        >
                            {productTypes.map(product => <Option key={product}>{product}</Option>)}
                        </Select>
                        </div>
                        <div className="subject-balance-filter-left">
                            品名：<Select
                            style={{
                                width: 116,
                                marginRight: 15
                            }}
                            showSearch
                            onChange={this.handleNameChange}
                            allowClear={false}
                        >
                            {productType.map(type => <Option key={type.name}>{type.name}</Option>)}
                        </Select>
                        </div>
                        <div className="subject-balance-filter-left">
                            规格：<Select
                            style={{
                                width: 116,
                                marginRight: 15
                            }}
                            onChange={this.handleNameChange}
                            showSearch
                            allowClear={false}
                        >
                            {productSizeList.map(size => <Option key={size}>{size}</Option>)}
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
                <Col span={16} id="showPrice" className="detail-echart"></Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
  }
}

export default Detail1;
