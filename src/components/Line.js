import React, { Component } from 'react';
import {Row,Col} from "antd";
import echarts from "echarts/lib/echarts";
// 引入折线图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/map/js/china';

class Line extends Component {

    componentWillReceiveProps  = (nextProps) => {
        const {name,minPrice,avgPrice,maxPrice,dateTime,minPrice_seven,avgPrice_seven,maxPrice_seven,dateTime_seven} = nextProps;
        var myChart = echarts.init(document.getElementById('showPrice'));
        var myChart_last = echarts.init(document.getElementById('showLast'));
        var option = {
            title: {
                text: name + '价格趋势',
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#00BFFF'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['最低价','平均价','最高价']
            },
            color: ["#0080ff","#4cd5ce","#FFC125"],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dateTime
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'最低价',
                    type:'line',
                    stack: '总量',
                    data:minPrice
                },
                {
                    name:'平均价',
                    type:'line',
                    stack: '总量',
                    data:avgPrice
                },
                {
                    name:'最高价',
                    type:'line',
                    stack: '总量',
                    data:maxPrice
                }
            ]
        };
        var option_last = {
            title: {
                text: name + '未来7天价格趋势',
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#00BFFF'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    },
                }
            },
            legend: {
                data:['最低价','平均价','最高价']
            },
            color: ["#0080ff","#4cd5ce"],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dateTime_seven
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'最低价',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                    offset: 0, color: '#d7f4f8' // 0% 处的颜色
                                }, {
                                    offset: 0.5, color: '#eefcfd' // 100% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }]
                            ),  //背景渐变色
                            borderColor: "#4fd6d2",
                            lineStyle: {        // 系列级个性化折线样式
                                width: 1,
                                type: 'solid',
                                color: "#4fd6d2"
                            }
                        },
                        emphasis: {
                            color: '#4fd6d2',
                            lineStyle: {        // 系列级个性化折线样式
                                width:2,
                                type: 'dotted',
                                color: "#4fd6d2" //折线的颜色
                            }
                        }
                    },//线条样式
                    symbolSize:5, //折线点的大小
                    areaStyle: {normal: {}},
                    data:minPrice_seven
                },
                {
                    name:'平均价',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                    offset: 0, color: '#81befd' // 0% 处的颜色
                                }, {
                                    offset: 0.4, color: '#e4f2ff' // 100% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }]
                            ), //背景渐变色
                            borderColor: "#0180ff",
                            lineStyle: {        // 系列级个性化折线样式
                                width: 1,
                                type: 'solid',
                                color: "#0180ff" //折线的颜色
                            }
                        },
                        emphasis: {
                            color: '#0180ff',
                            lineStyle: {        // 系列级个性化折线样式
                                width: 2,
                                type: 'dotted',
                                color: "0180ff"
                            }
                        }
                    },//线条样式
                    symbolSize:5, //折线点的大小
                    areaStyle: {normal: {}},
                    data:avgPrice_seven
                },
                {
                    name:'最高价',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                    offset: 0, color: '#7FFFD4' // 0% 处的颜色
                                }, {
                                    offset: 0.5, color: '#F0FFF0' // 100% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }]
                            ),  //背景渐变色
                            borderColor: "#76EEC6",
                            lineStyle: {        // 系列级个性化折线样式
                                width: 1,
                                type: 'solid',
                                color: "#76EEC6"
                            }
                        },
                        emphasis: {
                            color: '#76EEC6',
                            lineStyle: {        // 系列级个性化折线样式
                                width:2,
                                type: 'dotted',
                                color: "#76EEC6" //折线的颜色
                            }
                        }
                    },//线条样式
                    symbolSize:5, //折线点的大小
                    areaStyle: {normal: {}},
                    data:maxPrice_seven
                }
            ]
        };

        myChart.setOption(option);
        myChart_last.setOption(option_last);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16} id="showPrice" className="detail-echart"></Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16} id="showLast" className="detail-echart"></Col>
                    <Col span={4}></Col>
                </Row>
            </div>

        );
    }
}

export default Line;
