import React, { Component } from 'react';
import echarts from "echarts/lib/echarts";
// 引入折线图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/map/js/china';

class DetailLine extends Component {

    componentWillReceiveProps = (nextProps) => {
        const {minPrice,avgPrice,maxPrice,dateTime} = nextProps;
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            title: {
                text: '',
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
                    data: minPrice
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
                    data:  avgPrice
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
                    data: maxPrice
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    render() {
        return (
            <div id="main" className="row" style={{"height":"400px","border":"1px solid #ccc"}}>

            </div>
        );
    }
}

export default DetailLine;
