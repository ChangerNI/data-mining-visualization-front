import React, { Component } from 'react';
import {Select,Row,Col} from "antd";
import '../../node_modules/antd/dist/antd.css';
import '../styles/css/detail1.css'
import qs from "qs";
import axios from "axios/index";
import Line from './Line';
import {url} from '../config/api';
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
            types: [],
            showProduct: [],
            productNames: "",
            productName: "",
            productSizes: "",
            productSize: "",
            productSizeList: [],
            minPrice:[],
            avgPrice:[],
            maxPrice:[],
            dateTime: [],
            minPrice_seven:[],
            avgPrice_seven:[],
            maxPrice_seven:[],
            dateTime_seven: []
        }
    }

    componentDidMount = () => {

        axios.post(url + '/product/enum',qs.stringify({
        })).then((res) => {

            let type = res.data.data;
            let vegetableList = [];
            let meatList = [];
            let fruitList = [];
            let aquaticList = [];
            let oilList = [];
            console.log(type);
            for(let i=0;i<type.length;i++){
                if(type[i].value === "VEGETABLE"){
                    for(let j=0;j<type[i].children.length;j++){
                        vegetableList.push({name:type[i].children[j].value,size:type[i].children[j].children});
                    }
                }else if(type[i].value === "MEAT"){
                    for(let j=0;j<type[i].children.length;j++){
                        meatList.push({name:type[i].children[j].value,size:type[i].children[j].children});
                    }
                }else if(type[i].value === "FRUIT"){
                    for(let j=0;j<type[i].children.length;j++){
                        fruitList.push({name:type[i].children[j].value,size:type[i].children[j].children});
                    }
                }else if(type[i].value === "AQUATIC"){
                    for(let j=0;j<type[i].children.length;j++){
                        aquaticList.push({name:type[i].children[j].value,size:type[i].children[j].children});
                    }
                }else{
                    for(let j=0;j<type[i].children.length;j++){
                        oilList.push({name:type[i].children[j].value,size:type[i].children[j].children});
                    }
                }
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
            productType: this.state.productNames[value],
            productName: "",
            productSize: "",
            types: value
        });
    }

    handleNameChange = (value) => {
        this.setState({
            productName: value
        });
        for(let i=0;i<this.state.productType.length;i++){
            if(value === this.state.productType[i].name){
                this.setState({
                    productSizeList: this.state.productType[i].size
                })
            }
        }
    }

    handleSizeChange = (value) => {
        this.setState({
            productSize: value,
        });
    }

    showPrice = () => {
        let type = "";
        if(this.state.types === "水产"){
            type = "AQUATIC";
        }else if(this.state.types === "蔬菜"){
            type = "VEGETABLE";
        }else if(this.state.types === "水果"){
            type = "FRUIT"
        }else if(this.state.types === "粮油"){
            type = "OIL"
        }else if(this.state.types === "肉类"){
            type = "MEAT"
        }
        axios.post(url + '/product/analysis',qs.stringify({
            "productType":type,
            "productName":this.state.productName,
            "sizeType":this.state.productSize
        })).then((res) => {
            let priceList = res.data.data;
            let min = [];
            let avg = [];
            let max = [];
            let date = []
            for(let i=0;i<priceList.length;i++){
                min.push(priceList[i].minPrice);
                avg.push(priceList[i].avgPrice);
                max.push(priceList[i].maxPrice);
                date.push(priceList[i].dateTime.substring(0,10));
            }

            this.setState({
                minPrice: min,
                avgPrice: avg,
                maxPrice: max,
                dateTime: date
            })
        })

        axios.post(url + '/product/future',qs.stringify({
            "productType":type,
            "productName":this.state.productName,
            "sizeType":this.state.productSize
        })).then((res) => {
            let Lists = res.data.data;
            let min_seven = [];
            let avg_seven = [];
            let max_seven = [];
            let date_seven = []
            for(let i=0;i<Lists.length;i++){
                if(i %4 === 0){
                    date_seven.push(Lists[i]);
                }
                if(i % 4 === 1){
                    min_seven.push(Lists[i].toFixed(3));
                }
                if(i % 4 === 2){
                    avg_seven.push(Lists[i].toFixed(3));
                }
                if(i % 4 === 3){
                    max_seven.push(Lists[i].toFixed(3));
                }
            }

            this.setState({
                minPrice_seven: min_seven,
                avgPrice_seven: avg_seven,
                maxPrice_seven: max_seven,
                dateTime_seven: date_seven
            })
        })
    }

  render() {
      const {productType,productSizeList} = this.state;

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
                            value={this.state.productName}
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
                            value={this.state.productSize}
                            onChange={this.handleSizeChange}
                            showSearch
                            allowClear={false}
                        >
                            {productSizeList.map(size => <Option key={size.value}>{size.value}</Option>)}
                        </Select>
                        </div>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="filter-right">
                        <button type="button" className="ant-btn detail-btn" onClick={this.showPrice}>
                            <span>查 询</span>
                        </button>
                    </div>
                </Col>
                <Col span={4}>

                </Col>
            </Row>
            <Line name={this.state.productName} minPrice={this.state.minPrice} avgPrice={this.state.avgPrice} maxPrice={this.state.maxPrice} dateTime={this.state.dateTime}
                  minPrice_seven={this.state.minPrice_seven} avgPrice_seven={this.state.avgPrice_seven} maxPrice_seven={this.state.maxPrice_seven} dateTime_seven={this.state.dateTime_seven}/>
        </div>
    );
  }
}

export default Detail1;
