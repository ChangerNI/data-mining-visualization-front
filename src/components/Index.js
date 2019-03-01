import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import  'echarts/lib/chart/line';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/map/js/china';
import '../styles/css/index.css';
import {data,geoCoordMap} from '../config/data';

function convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

function randomValue() {
    return Math.round(Math.random()*1000);
}


class Index extends Component {
    componentDidMount = () => {
        //基于准备好的dom，初始化echarts实例
        var myChart_one = echarts.init(document.getElementById('one'));
        var myChart_two = echarts.init(document.getElementById('two'));
        var myChart_three = echarts.init(document.getElementById('three'));
        var myChart_four = echarts.init(document.getElementById('four'));

        //指定图表的配置项和数据

        var option_one = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['蒸发量','降水量','平均温度']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'平均温度',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };

        var option_two = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'邮件营销',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'搜索引擎',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'百度',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'谷歌',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'必应',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'其他',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };

        var option_three = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
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
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        var option_four = {
            tooltip: {},
            visualMap: {
                min: 0,
                max: 1500,
                left: 'left',
                top: 'bottom',
                text: ['High','Low'],
                seriesIndex: [1],
                inRange: {
                    color: ['#e0ffff', '#006edd']
                },
                calculable : true
            },
            geo: {
                map: 'china',
                roam: true,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                itemStyle: {
                    normal:{
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: null,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 20,
                    symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                    symbolRotate: 35,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F06C00'
                        }
                    }
                },
                {
                    name: 'categoryA',
                    type: 'map',
                    geoIndex: 0,
                    // tooltip: {show: false},
                    data:[
                        {name: '北京', value: randomValue()},
                        {name: '天津', value: randomValue()},
                        {name: '上海', value: randomValue()},
                        {name: '重庆', value: randomValue()},
                        {name: '河北', value: randomValue()},
                        {name: '河南', value: randomValue()},
                        {name: '云南', value: randomValue()},
                        {name: '辽宁', value: randomValue()},
                        {name: '黑龙江', value: randomValue()},
                        {name: '湖南', value: randomValue()},
                        {name: '安徽', value: randomValue()},
                        {name: '山东', value: randomValue()},
                        {name: '新疆', value: randomValue()},
                        {name: '江苏', value: randomValue()},
                        {name: '浙江', value: randomValue()},
                        {name: '江西', value: randomValue()},
                        {name: '湖北', value: randomValue()},
                        {name: '广西', value: randomValue()},
                        {name: '甘肃', value: randomValue()},
                        {name: '山西', value: randomValue()},
                        {name: '内蒙古', value: randomValue()},
                        {name: '陕西', value: randomValue()},
                        {name: '吉林', value: randomValue()},
                        {name: '福建', value: randomValue()},
                        {name: '贵州', value: randomValue()},
                        {name: '广东', value: randomValue()},
                        {name: '青海', value: randomValue()},
                        {name: '西藏', value: randomValue()},
                        {name: '四川', value: randomValue()},
                        {name: '宁夏', value: randomValue()},
                        {name: '海南', value: randomValue()},
                        {name: '台湾', value: randomValue()},
                        {name: '香港', value: randomValue()},
                        {name: '澳门', value: randomValue()}
                    ]
                }
            ]
        };



        //使用刚指定的配置项和数据显示图表
        myChart_one.setOption(option_one);
        myChart_two.setOption(option_two);
        myChart_three.setOption(option_three);
        myChart_four.setOption(option_four);
    }


    render() {
        return (
            <div id="index" className="index">
                <div className="column">
                    <div id="one" className="one list" style={{"transform": "translate(-22.4%, 0.5%) scale(0.33)"}}>1</div>
                    <div id="two" className="two list" style={{"transform": "translate(-22.4%, -33.5%) scale(0.33)"}}>2</div>
                    <div id="three" className="three list" style={{"transform": "translate(-22.4%, 34.5%) scale(0.33)"}}>3</div>
                    <div id="four" className="four list" style={{"transform": "translate(43.7%, 0px) scale(1)"}}>4</div>
                </div>
            </div>
        );
    }
}

export default Index;
