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
import {geoCoordMap} from '../config/data';
import $ from 'jquery';


class IndexItem extends Component {
    constructor (props) {

        super(props);
        this.state = {

        }
    }


    componentWillReceiveProps  = (nextProps) => {
        const {vegetableType,vegetableValue,fruitType,fruitValue,oilType,oilValue,meatType,meatValue,aquaticType,aquaticValue} = nextProps;
        console.log(vegetableValue);

        //基于准备好的dom，初始化echarts实例
        var myChart_one = echarts.init(document.getElementById('one'));
        var myChart_two = echarts.init(document.getElementById('two'));
        var myChart_three = echarts.init(document.getElementById('three'));
        var myChart_four = echarts.init(document.getElementById('four'));
        var myChart_five = echarts.init(document.getElementById('five'));
        var myChart_six = echarts.init(document.getElementById('six'));

        //指定图表的配置项和数据

        var option_four  = {
            title : {
                text: '农产品数据',
                subtext: '蔬菜'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['总量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : vegetableType,
                    axisLabel: {
                        interval:0,
                        rotate:40
                    }
                },
            ],

            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'总量',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: '#00BFFF',
                        },
                    },
                    data:vegetableValue,
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };

        var option_two  = {
            title : {
                text: '农产品数据',
                subtext: '水果'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['总量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : fruitType,
                    axisLabel: {
                        interval:0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'总量',
                    type:'bar',
                    data:fruitValue,
                    itemStyle: {
                        normal: {
                            color: '#87CEFA',
                        },
                    },
                    markPoint : {
                        data : [
                            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        var option_three = {
            title : {
                text: '农产品数据',
                subtext: '肉类'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['总量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : meatType,
                    axisLabel: {
                        interval:0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'总量',
                    type:'bar',
                    data:meatValue,
                    itemStyle: {
                        normal: {
                            color: '#66CDAA',
                        },
                    },
                    markPoint : {
                        data : [
                            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        var option_five = {
            title : {
                text: '农产品数据',
                subtext: '粮油'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['总量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : oilType,
                    axisLabel: {
                        interval:0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'总量',
                    type:'bar',
                    data:oilValue,
                    itemStyle: {
                        normal: {
                            color: '#00CED1',
                        },
                    },
                    markPoint : {
                        data : [
                            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        var option_six = {
            title : {
                text: '农产品数据',
                subtext: '水产'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['总量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : aquaticType,
                    axisLabel: {
                        interval:0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'总量',
                    type:'bar',
                    data:aquaticValue,
                    itemStyle: {
                        normal: {
                            color: '#66CDAA',
                        },
                    },
                    markPoint : {
                        data : [
                            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        var BJData = [
            [{name:'北京'}, {name:'上海',value:95}],
            [{name:'北京'}, {name:'广州',value:90}],
            [{name:'北京'}, {name:'大连',value:80}],
            [{name:'北京'}, {name:'南宁',value:70}],
            [{name:'北京'}, {name:'南昌',value:60}],
            [{name:'北京'}, {name:'拉萨',value:50}],
            [{name:'北京'}, {name:'长春',value:40}],
            [{name:'北京'}, {name:'包头',value:30}],
            [{name:'北京'}, {name:'重庆',value:20}],
            [{name:'北京'}, {name:'常州',value:10}]
        ];

        var SHData = [
            [{name:'上海'},{name:'包头',value:95}],
            [{name:'上海'},{name:'昆明',value:90}],
            [{name:'上海'},{name:'广州',value:80}],
            [{name:'上海'},{name:'郑州',value:70}],
            [{name:'上海'},{name:'长春',value:60}],
            [{name:'上海'},{name:'重庆',value:50}],
            [{name:'上海'},{name:'长沙',value:40}],
            [{name:'上海'},{name:'北京',value:30}],
            [{name:'上海'},{name:'丹东',value:20}],
            [{name:'上海'},{name:'大连',value:10}]
        ];

        var GZData = [
            [{name:'广州'},{name:'福州',value:95}],
            [{name:'广州'},{name:'太原',value:90}],
            [{name:'广州'},{name:'长春',value:80}],
            [{name:'广州'},{name:'重庆',value:70}],
            [{name:'广州'},{name:'西安',value:60}],
            [{name:'广州'},{name:'成都',value:50}],
            [{name:'广州'},{name:'常州',value:40}],
            [{name:'广州'},{name:'北京',value:30}],
            [{name:'广州'},{name:'北海',value:20}],
            [{name:'广州'},{name:'海口',value:10}]
        ];

        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord
                    }, {
                        coord: toCoord
                    }]);
                }
            }
            return res;
        };

        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var series = [];
        [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
            series.push({
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });

        var option_one = {
            backgroundColor: '#404a59',
            title : {
                text: '模拟迁徙',
                subtext: '数据纯属虚构',
                left: 'center',
                textStyle : {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data:['北京 Top10', '上海 Top10', '广州 Top10'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: 'single'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: series
        };



        //使用刚指定的配置项和数据显示图表
        myChart_one.setOption(option_one);
        myChart_two.setOption(option_two);
        myChart_three.setOption(option_three);
        myChart_four.setOption(option_four);
        myChart_five.setOption(option_five);
        myChart_six.setOption(option_six);

        $('#one').click(() =>{
            $("#one").addClass("active");
            if($("#main").hasClass("active")){
                $("#main").removeClass("active");
                $(".main").addClass("one");
            }else if($("#two").hasClass("active")){
                $("#two").removeClass("active");
                $(".two").addClass("one");
            }else if($("#three").hasClass("active")){
                $("#three").removeClass("active");
                $(".three").addClass("one");
            }else if($("#four").hasClass("active")){
                $("#four").removeClass("active");
                $(".four").addClass("one");
            }else if($("#five").hasClass("active")){
                $("#five").removeClass("active");
                $(".five").addClass("one");
            }else if($("#six").hasClass("active")){
                $("#six").removeClass("active");
                $(".six").addClass("one");
            }
        })

        $('#two').click(() =>{
            $("#two").addClass("active");
            if($("#main").hasClass("active")){
                $("#main").removeClass("active");
                $(".main").addClass("two");
            }else if($("#one").hasClass("active")){
                $("#one").removeClass("active");
                $(".one").addClass("two");
            }else if($("#three").hasClass("active")){
                $("#three").removeClass("active");
                $(".three").addClass("two");
            }else if($("#four").hasClass("active")){
                $("#four").removeClass("active");
                $(".four").addClass("two");
            }else if($("#five").hasClass("active")){
                $("#five").removeClass("active");
                $(".five").addClass("two");
            }else if($("#six").hasClass("active")){
                $("#six").removeClass("active");
                $(".six").addClass("two");
            }

        })

        $('#three').click(() =>{
            $("#three").addClass("active");
            if($("#main").hasClass("active")){
                $("#main").removeClass("active");
                $(".main").addClass("three");
            }else if($("#one").hasClass("active")){
                $("#one").removeClass("active");
                $(".one").addClass("three");
            }else if($("#two").hasClass("active")){
                $("#two").removeClass("active");
                $(".two").addClass("three");
            }else if($("#four").hasClass("active")){
                $("#four").removeClass("active");
                $(".four").addClass("three");
            }else if($("#five").hasClass("active")){
                $("#five").removeClass("active");
                $(".five").addClass("three");
            }else if($("#six").hasClass("active")){
                $("#six").removeClass("active");
                $(".six").addClass("three");
            }

        })

        $('#four').click(() =>{
            $("#four").addClass("active");
            if($("#main").hasClass("active")){
                $("#main").removeClass("active");
                $(".main").addClass("four");
            }else if($("#one").hasClass("active")){
                $("#one").removeClass("active");
                $(".one").addClass("four");
            }else if($("#three").hasClass("active")){
                $("#three").removeClass("active");
                $(".three").addClass("four");
            }else if($("#two").hasClass("active")){
                $("#two").removeClass("active");
                $(".two").addClass("four");
            }else if($("#five").hasClass("active")){
                $("#five").removeClass("active");
                $(".five").addClass("four");
            }else if($("#six").hasClass("active")){
                $("#six").removeClass("active");
                $(".six").addClass("four");
            }

        })

        $('#five').click(() =>{
            $("#five").addClass("active");
            if($("#main").hasClass("active")){
                $("#main").removeClass("active");
                $(".main").addClass("five");
            }else if($("#one").hasClass("active")){
                $("#one").removeClass("active");
                $(".one").addClass("five");
            }else if($("#three").hasClass("active")){
                $("#three").removeClass("active");
                $(".three").addClass("five");
            }else if($("#four").hasClass("active")){
                $("#four").removeClass("active");
                $(".four").addClass("five");
            }else if($("#two").hasClass("active")){
                $("#two").removeClass("active");
                $(".two").addClass("five");
            }else if($("#six").hasClass("active")){
                $("#six").removeClass("active");
                $(".six").addClass("five");
            }

        })

        $('#six').click(() =>{
            $("#six").addClass("active");
            if($("#main").hasClass("active")){
                $("#main").removeClass("active");
                $(".main").addClass("six");
            }else if($("#one").hasClass("active")){
                $("#one").removeClass("active");
                $(".one").addClass("six");
            }else if($("#three").hasClass("active")){
                $("#three").removeClass("active");
                $(".three").addClass("six");
            }else if($("#four").hasClass("active")){
                $("#four").removeClass("active");
                $(".four").addClass("six");
            }else if($("#five").hasClass("active")){
                $("#five").removeClass("active");
                $(".five").addClass("six");
            }else if($("#two").hasClass("active")){
                $("#two").removeClass("active");
                $(".two").addClass("six");
            }

        })

        $('#main').click(() =>{
            $("#main").addClass("active");
            if($("#two").hasClass("active")){
                $("#two").removeClass("active");
                $(".two").addClass("main");
            }else if($("#one").hasClass("active")){
                $("#one").removeClass("active");
                $(".one").addClass("main");
            }else if($("#three").hasClass("active")){
                $("#three").removeClass("active");
                $(".three").addClass("main");
            }else if($("#four").hasClass("active")){
                $("#four").removeClass("active");
                $(".four").addClass("main");
            }else if($("#five").hasClass("active")){
                $("#five").removeClass("active");
                $(".five").addClass("main");
            }else if($("#six").hasClass("active")){
                $("#six").removeClass("active");
                $(".six").addClass("main");
            }

        })


    }


    render() {
        return (
            <div id="index" className="index">
                <div className="column">
                    <div id="six" className="one list" style={{"transform": "translate(19.7%, 68%) scale(0.49,0.33)"}}></div>
                    <div id="two" className="two list" style={{"transform": "translate(-22.4%, 0.5%) scale(0.33)"}}></div>
                    <div id="three" className="three list" style={{"transform": "translate(-22.4%, 34.5%) scale(0.33)"}}></div>
                    <div id="five" className="five list" style={{"transform": "translate(-22.4%, 68.5%) scale(0.33)"}}></div>
                    <div id="one" className="six list" style={{"transform": "translate(-22.4%, -33.5%) scale(0.33)"}}></div>
                    <div id="four" className="four list" style={{"transform": "translate(69.7%, 68%) scale(0.49,0.33)"}}></div>
                    <div id="main" className="main list active" style={{"transform":"translate(44.7%, 0px) scale(1)"}}></div>
                </div>
            </div>
        );
    }
}

export default IndexItem;
