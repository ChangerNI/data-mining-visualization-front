import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import  'echarts/lib/chart/line';
// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/map/js/china';
import '../styles/css/common.css';
import '../styles/css/map.css';

class IndexContent extends Component {
    constructor (props) {

        super(props);
        this.state = {

        }
    }

    componentWillReceiveProps  = (nextProps) => {
        const {vegetableType,vegetableValue,fruitType,fruitValue,oilType,oilValue,meatType,meatValue,aquaticType,aquaticValue,mapType,mapPercent,mapData} = nextProps;

        this.echarts_1();
        this.echarts_2(aquaticType,aquaticValue);
        this.map(mapType,mapPercent,mapData);
        this.echarts_3(vegetableType,vegetableValue);
        this.echarts_4(fruitType,fruitValue);
        this.echarts_5(oilType,oilValue);
        this.echarts_6(meatType,meatValue);
    }

    echarts_1 = () => {
        // 基于准备好的dom，初始化echarts实例
        var myChart_1 = echarts.init(document.getElementById('echarts_1'));

        var data = [
            {value: 12,name: '水产'},
            {value: 13,name: '粮油'},
            {value: 70,name: '蔬菜'},
            {value: 52,name: '水果'},
            {value: 35,name: '肉禽蛋'}
        ];

        var option_1 = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: <br/>{c} ({d}%)"
            },
            color: ['#af89d6', '#4ac7f5', '#0089ff', '#f36f8a', '#f5c847'],
            legend: { //图例组件，颜色和名字
                x: '70%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 10,
                itemHeight: 10,
                icon: 'rect',
                data: ['水产', '粮油', '蔬菜', '水果', '肉禽蛋'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name: '行业占比',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 75], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 2,
                    },
                },
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 40], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart_1.setOption(option_1);
        window.addEventListener("resize",function(){
            myChart_1.resize();
        });
    }
    echarts_2 = (aquaticType,aquaticValue) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_2'));
        var formatNum = (strNum) => {
            if(strNum.length <= 3) {
                return strNum;
            }
            if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                return strNum;
            }
            var a = RegExp.$1,
                b = RegExp.$2,
                c = RegExp.$3;
            var re = new RegExp();
            re.compile("(\\d)(\\d{3})(,|$)");
            while(re.test(b)) {
                b = b.replace(re, "$1,$2$3");
            }
            return a + "" + b + "" + c;
        }

        var xData = function() {
            var data = aquaticType;

            return data;
        }();

        var data = aquaticValue;

        var option = {
            // backgroundColor: "#141f56",

            tooltip: {
                show: "true",
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.4)', // 背景
                padding: [8, 10], //内边距
                // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
                formatter: function(params) {
                    if (params.seriesName !== "") {
                        return params.name + '<br>' + formatNum(params.value) + ' kg';
                    }
                },

            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left:55,
                right:30,
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: xData,
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: xData,
            }],
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    formatter: function(value){
                        return formatNum(value)
                    }
                },
            },
            series: [{
                // name: '生师比(%)',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00c0e9'
                        }, {
                            offset: 1,
                            color: '#3b73cf'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105,123, 214, 0.7)'
                    }
                },
                zlevel: 2,
                barWidth: '20%',
                data: data,
            },
                {
                    name: '',
                    type: 'bar',
                    xAxisIndex: 1,
                    zlevel: 1,
                    itemStyle: {
                        normal: {
                            color: '#121847',
                            borderWidth: 0,
                            shadowBlur: {
                                shadowColor: 'rgba(255,255,255,0.31)',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                            },
                        }
                    },
                    barWidth: '20%',
                    data: [30, 30, 30, 30, 30]
                }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        // 动态显示tootip
        var faultByHourIndex = 0; //播放所在下标
        var faultByHourTime = setInterval(function() { //使得tootip每隔三秒自动显示
            myChart.dispatchAction({
                type: 'showTip', // 根据 tooltip 的配置项显示提示框。
                seriesIndex: 0,
                dataIndex: faultByHourIndex
            });
            faultByHourIndex++;
            if (faultByHourIndex > option.series[0].data.length) {
                faultByHourIndex = 0;
            }
        }, 3000);
    }
    map = (mapType,mapPercent,mapData) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));

        var nameColor = " rgb(55, 75, 113)";
        var name_fontFamily = '宋体';
        var name_fontSize = 35;
        var mapName = 'china';
        var data = [];
        var geoCoordMap = {};
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        console.log(mapData);
        var type = function(name){
            for(let i=0;i<mapData.length;i++){
                if(mapData[i].value === name){
                    return mapData[i].children
                    console.log(mapData[i].children)
                }
            }
        }


        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
            let mtype = [];
            if(type(name)){
                mtype = type(name);
            }else{
                mtype = [];
            }
            data.push({
                name: name,
                value: Math.round(Math.random() * 100 + 10)
            })

            let obj = [];
            for(let i=0;i<mtype.length;i++){
                obj.push({name:mtype[i].value,value:mtype[i].children[0].value + "%"})
            }
            toolTipData.push({
                name: name,
                value: obj
            })
        });

        var max = 480,
            min = 9; // todo
        var maxSize4Pin = 50,
            minSize4Pin = 20;

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

        var option = {

            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (typeof(params.value)[2] == "undefined") {
                        var toolTiphtml = ''
                        for(let i = 0;i<toolTipData.length;i++){
                            if(params.name===toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(let j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        console.log(toolTiphtml)
                        // console.log(convertData(data))
                        return toolTiphtml;
                    } else {
                        let toolTiphtml = ''
                        for(let i = 0;i<toolTipData.length;i++){
                            if(params.name===toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(let j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        console.log(toolTiphtml)
                        // console.log(convertData(data))
                        return toolTiphtml;
                    }
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['credit_pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 600,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    // color: ['#3B5077', '#031525'] // 蓝黑
                    // color: ['#ffc0cb', '#800080'] // 红紫
                    // color: ['#3C3B3F', '#605C3C'] // 黑绿
                    //  color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                    // color: ['#23074d', '#cc5333'] // 紫红
                    //   color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#1488CC', '#2B32B2'] // 浅蓝
                    // color: ['#00467F', '#A5CC82','#ffc0cb'] // 蓝绿红
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    color: ['#22e5e8', '#0035f9','#22e5e8'] // 蓝绿

                }
            },
            /*工具按钮组*/
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {

                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            geo: {
                show: true,
                map: mapName,
                zoom: 1.20,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#097bba'
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                }
            },
            series: [{
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,0,0.8)'
                    }
                }
            },
                {
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin', //气泡
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    label: {

                        normal: {
                            show: false,
                            formatter:function (params) { return params.data.value[2] },
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            }
                        }
                    },
                    itemStyle: {

                        normal: {
                            color: 'rgba(255,255,0,0)', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,0,0.8)',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        // 动态显示tootip
        var faultByHourIndex = 0; //播放所在下标
        var faultByHourTime = setInterval(function() { //使得tootip每隔三秒自动显示
            myChart.dispatchAction({
                type: 'showTip', // 根据 tooltip 的配置项显示提示框。
                seriesIndex: 0,
                dataIndex: faultByHourIndex
            });
            faultByHourIndex++;
            if (faultByHourIndex > option.series[0].data.length) {
                faultByHourIndex = 0;
            }
        }, 3000);
    }
    echarts_3 = (vegetableType,vegetableValue) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_3'));


        var formatter = function (value, index) {
            return value + 'kg';
        }


        var option = {

            tooltip : {
                trigger: 'axis',
                formatter: function (params, ticket, callback) {
                    //x轴名称
                    var name = params[0].name
                    //值
                    var value = params[0].value
                    var valueFliter = formatter(value)
                    return name + '<br />' + valueFliter
                }
            },
            legend: {
                orient: 'vertical',
                data:['简易程序案件数']
            },
            grid: {
                left: '3%',
                right: '3%',
                top:'8%',
                bottom: '5%',
                containLabel: true
            },
            color:['#a4d8cc','#25f3e6'],
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },

            calculable : true,
            xAxis : [
                {
                    type : 'category',

                    axisTick:{show:false},

                    boundaryGap : false,
                    axisLabel: {
                        textStyle:{
                            color: '#ccc',
                            fontSize:'12'
                        },
                        lineStyle:{
                            color:'#2c3459',
                        },
                        interval: 0,
                        rotate:30,
                        formatter : function(params){
                            var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的个数
                            var provideNumber = 4;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                var tempStr = "";
                                tempStr=params.substring(0,4);
                                newParamsName = tempStr+"...";// 最终拼成的字符串
                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                        }

                    },
                    data: vegetableType
                }
            ],
            yAxis : {
                type : 'value',
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize:'12',
                    }
                },
                axisLine: {
                    lineStyle:{
                        color:'rgba(160,160,160,0.3)',
                    }
                },
                splitLine: {
                    lineStyle:{
                        color:'rgba(160,160,160,0.3)',
                    }
                },

            }
            ,
            series : [
                {
                    // name:'简易程序案件数',
                    type:'line',
                    areaStyle: {

                        normal: {type: 'default',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [{
                                offset: 0,
                                color: '#25f3e6'
                            }, {
                                offset: 1,
                                color: '#0089ff'
                            }], false)
                        }
                    },
                    smooth:true,
                    itemStyle: {
                        normal: {areaStyle: {type: 'default'}}
                    },
                    data:vegetableValue
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        // 动态显示tootip
        var faultByHourIndex = 0; //播放所在下标
        var faultByHourTime = setInterval(function() { //使得tootip每隔三秒自动显示
            myChart.dispatchAction({
                type: 'showTip', // 根据 tooltip 的配置项显示提示框。
                seriesIndex: 0,
                dataIndex: faultByHourIndex
            });
            faultByHourIndex++;
            if (faultByHourIndex > option.series[0].data.length) {
                faultByHourIndex = 0;
            }
        }, 3000);
    }
    echarts_4 = (fruitType,fruitValue) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_4'));
        var formatNum = (strNum) => {
            if(strNum.length <= 3) {
                return strNum;
            }
            if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                return strNum;
            }
            var a = RegExp.$1,
                b = RegExp.$2,
                c = RegExp.$3;
            var re = new RegExp();
            re.compile("(\\d)(\\d{3})(,|$)");
            while(re.test(b)) {
                b = b.replace(re, "$1,$2$3");
            }
            return a + "" + b + "" + c;
        }

        var xData = function() {
            var data = fruitType;

            return data;
        }();

        var data = fruitValue;

        var option = {
            // backgroundColor: "#141f56",

            tooltip: {
                show: "true",
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.4)', // 背景
                padding: [8, 10], //内边距
                // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
                formatter: function(params) {
                    if (params.seriesName !== "") {
                        return params.name + '<br>' + formatNum(params.value) + ' kg';
                    }
                },

            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left:75,
                right:30,
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    interval:0,
                    rotate:24
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: xData,
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: xData,
            }],
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    formatter: function(value){
                        return formatNum(value)
                    }
                }
            },
            series: [{
                // name: '生师比(%)',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00c0e9'
                        }, {
                            offset: 1,
                            color: '#3b73cf'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,

                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105,123, 214, 0.7)'
                    }
                },
                level: 2,
                barWidth: '20%',
                data: data,
            },
                // {
                //     name: '',
                //     type: 'bar',
                //     xAxisIndex: 1,
                //     zlevel: 1,
                //     itemStyle: {
                //         normal: {
                //             color: '#121847',
                //             borderWidth: 0,
                //             shadowBlur: {
                //                 shadowColor: 'rgba(255,255,255,0.31)',
                //                 shadowBlur: 10,
                //                 shadowOffsetX: 0,
                //                 shadowOffsetY: 2,
                //             },
                //         }
                //     },
                //     barWidth: '20%',
                //     data: [30, 30, 30, 30, 30]
                // }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        // 动态显示tootip
        var faultByHourIndex = 0; //播放所在下标
        var faultByHourTime = setInterval(function() { //使得tootip每隔三秒自动显示
            myChart.dispatchAction({
                type: 'showTip', // 根据 tooltip 的配置项显示提示框。
                seriesIndex: 0,
                dataIndex: faultByHourIndex
            });
            faultByHourIndex++;
            if (faultByHourIndex > option.series[0].data.length) {
                faultByHourIndex = 0;
            }
        }, 3000);
    }
    echarts_5 = (oilType,oilValue) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_5'));
        var formatNum = (strNum) => {
            if(strNum.length <= 3) {
                return strNum;
            }
            if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                return strNum;
            }
            var a = RegExp.$1,
                b = RegExp.$2,
                c = RegExp.$3;
            var re = new RegExp();
            re.compile("(\\d)(\\d{3})(,|$)");
            while(re.test(b)) {
                b = b.replace(re, "$1,$2$3");
            }
            return a + "" + b + "" + c;
        }

        var xData = function() {
            var data = oilType;

            return data;
        }();

        var data = oilValue;

        var option = {
            // backgroundColor: "#141f56",

            tooltip: {
                show: "true",
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.4)', // 背景
                padding: [8, 10], //内边距
                // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
                formatter: function(params) {
                    if (params.seriesName !== "") {
                        return params.name + '<br>' + formatNum(params.value) + ' kg';
                    }
                },

            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left:55,
                right:30,
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    interval:0,
                    rotate:24
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: xData,
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: xData,
            }],
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    formatter: function(value){
                        return formatNum(value)
                    }
                },
            },
            series: [{
                // name: '生师比(%)',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00c0e9'
                        }, {
                            offset: 1,
                            color: '#3b73cf'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105,123, 214, 0.7)'
                    }
                },
                zlevel: 2,
                barWidth: '20%',
                data: data,
            },
                {
                    name: '',
                    type: 'bar',
                    xAxisIndex: 1,
                    zlevel: 1,
                    itemStyle: {
                        normal: {
                            color: '#121847',
                            borderWidth: 0,
                            shadowBlur: {
                                shadowColor: 'rgba(255,255,255,0.31)',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                            },
                        }
                    },
                    barWidth: '20%',
                    data: [30, 30, 30, 30, 30]
                }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        // 动态显示tootip
        var faultByHourIndex = 0; //播放所在下标
        var faultByHourTime = setInterval(function() { //使得tootip每隔三秒自动显示
            myChart.dispatchAction({
                type: 'showTip', // 根据 tooltip 的配置项显示提示框。
                seriesIndex: 0,
                dataIndex: faultByHourIndex
            });
            faultByHourIndex++;
            if (faultByHourIndex > option.series[0].data.length) {
                faultByHourIndex = 0;
            }
        }, 3000);
    }
    echarts_6 = (meatType,meatValue) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_6'));
        var formatNum = (strNum) => {
            if(strNum.length <= 3) {
                return strNum;
            }
            if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                return strNum;
            }
            var a = RegExp.$1,
                b = RegExp.$2,
                c = RegExp.$3;
            var re = new RegExp();
            re.compile("(\\d)(\\d{3})(,|$)");
            while(re.test(b)) {
                b = b.replace(re, "$1,$2$3");
            }
            return a + "" + b + "" + c;
        }

        var xData = function() {
            var data = meatType;

            return data;
        }();

        var data = meatValue;

        var option = {
            // backgroundColor: "#141f56",

            tooltip: {
                show: "true",
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.4)', // 背景
                padding: [8, 10], //内边距
                // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
                formatter: function(params) {
                    if (params.seriesName !== "") {
                        return params.name + '<br>' + formatNum(params.value) + ' kg';
                    }
                },

            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left:55,
                right:30,
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    interval:0,
                    rotate:24
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: xData,
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: xData,
            }],
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#32346c ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    formatter: function(value){
                        return formatNum(value)
                    }
                },
            },
            series: [{
                // name: '生师比(%)',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00c0e9'
                        }, {
                            offset: 1,
                            color: '#3b73cf'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105,123, 214, 0.7)'
                    }
                },
                zlevel: 2,
                barWidth: '20%',
                data: data,
            },
                {
                    name: '',
                    type: 'bar',
                    xAxisIndex: 1,
                    zlevel: 1,
                    itemStyle: {
                        normal: {
                            color: '#121847',
                            borderWidth: 0,
                            shadowBlur: {
                                shadowColor: 'rgba(255,255,255,0.31)',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                            },
                        }
                    },
                    barWidth: '20%',
                    data: [30, 30, 30, 30, 30]
                }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        // 动态显示tootip
        var faultByHourIndex = 0; //播放所在下标
        var faultByHourTime = setInterval(function() { //使得tootip每隔三秒自动显示
            myChart.dispatchAction({
                type: 'showTip', // 根据 tooltip 的配置项显示提示框。
                seriesIndex: 0,
                dataIndex: faultByHourIndex
            });
            faultByHourIndex++;
            if (faultByHourIndex > option.series[0].data.length) {
                faultByHourIndex = 0;
            }
        }, 3000);
    }


    render() {
        return (
            <div>
                <div className="data" id="index-data">
                    <div className="data-title">
                        <div className="title-left fl"></div>
                        <div className="title-center fl"></div>
                        <div className="title-right fr"></div>
                    </div>
                    <div className="data-content">
                        <div className="con-left fl">
                            <div className="left-top">
                                <div className="info">
                                    <div className="info-title">上月统计 <span style={{"font-size":"12px"}}>(单位：KG)</span></div>
                                    <img src={require('../styles/img/bj-1.png')} alt="" className="bj-1"/>
                                    <img src={require("../styles/img/bj-2.png")} alt="" className="bj-2"/>
                                    <img src={require("../styles/img/bj-3.png")} alt="" className="bj-3"/>
                                    <img src={require("../styles/img/bj-4.png")} alt="" className="bj-4"/>
                                    <div className="info-main">
                                        <div className="info-1">
                                            <div className="info-img fl">
                                                <img src={require("../styles/img/info-img-1.png")} alt=""/>
                                            </div>
                                            <div className="info-text fl">
                                                <p>蔬菜</p>
                                                <p>44,965,999</p>
                                            </div>
                                        </div>
                                        <div className="info-2">
                                            <div className="info-img fl">
                                                <img src={require("../styles/img/info-img-2.png")} alt=""/>
                                            </div>
                                            <div className="info-text fl">
                                                <p>水果</p>
                                                <p>12,320,000</p>
                                            </div>
                                        </div>
                                        <div className="info-3">
                                            <div className="info-img fl">
                                                <img src={require("../styles/img/info-img-3.png")} alt=""/>
                                            </div>
                                            <div className="info-text fl">
                                                <p>肉禽蛋</p>
                                                <p>818,530</p>
                                            </div>
                                        </div>
                                        <div className="info-4">
                                            <div className="info-img fl">
                                                <img src={require("../styles/img/info-img-4.png")} alt=""/>
                                            </div>
                                            <div className="info-text fl">
                                                <p>淡水鱼</p>
                                                <p>261,400</p>
                                            </div>
                                        </div>
                                        <div className="info-5">
                                            <div className="info-img fl">
                                                <img src={require("../styles/img/info-img-5.png")} alt=""/>
                                            </div>
                                            <div className="info-text fl">
                                                <p>粮油</p>
                                                <p>496,160</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-bottom">
                                    <div className="title">农产品分类</div>
                                    <img src={require("../styles/img/bj-1.png")} alt="" className="bj-1"/>
                                    <img src={require("../styles/img/bj-2.png")} alt="" className="bj-2"/>
                                    <img src={require("../styles/img/bj-3.png")} alt="" className="bj-3"/>
                                    <img src={require("../styles/img/bj-4.png")} alt="" className="bj-4"/>
                                    <div id="echarts_1" className="charts"></div>
                                </div>
                            </div>
                            <div className="left-bottom">
                                <div className="title">水产</div>
                                <img src={require("../styles/img/bj-1.png")} alt="" className="bj-1"/>
                                <img src={require("../styles/img/bj-2.png")} alt="" className="bj-2"/>
                                <img src={require("../styles/img/bj-3.png")} alt="" className="bj-3"/>
                                <img src={require("../styles/img/bj-4.png")} alt="" className="bj-4"/>
                                <div id="echarts_2" className="charts"></div>
                            </div>
                        </div>
                        <div className="con-center fl">
                            <div className="cen-top" id="map"></div>
                            <div className="cen-bottom">
                                <div className="title">蔬菜</div>
                                <img src={require("../styles/img/bj-1.png")} alt="" className="bj-1"/>
                                <img src={require("../styles/img/bj-2.png")} alt="" className="bj-2"/>
                                <img src={require("../styles/img/bj-3.png")} alt="" className="bj-3"/>
                                <img src={require("../styles/img/bj-4.png")} alt="" className="bj-4"/>
                                <div id="echarts_3" className="charts"></div>
                            </div>
                        </div>
                        <div className="con-right fr">
                            <div className="right-top">
                                <div className="title">水果</div>
                                <img src={require("../styles/img/bj-1.png")} alt="" className="bj-1"/>
                                <img src={require("../styles/img/bj-2.png")} alt="" className="bj-2"/>
                                <img src={require("../styles/img/bj-3.png")} alt="" className="bj-3"/>
                                <img src={require("../styles/img/bj-4.png")} alt="" className="bj-4"/>
                                <div id="echarts_4" className="charts"></div>
                            </div>
                            <div className="right-center">
                                <div className="title">粮油</div>
                                <img src={require("../styles/img/bj-1.png")} alt="" className="bj-1"/>
                                <img src={require("../styles/img/bj-2.png")} alt="" className="bj-2"/>
                                <img src={require("../styles/img/bj-3.png")} alt="" className="bj-3"/>
                                <img src={require("../styles/img/bj-4.png")} alt="" className="bj-4"/>
                                <div id="echarts_5" className="charts"></div>
                            </div>
                            <div className="right-bottom">
                                <div className="title">肉禽类</div>
                                <img src={require("../styles/img/bj-1.png")} alt="" className="bj-1"/>
                                <img src={require("../styles/img/bj-2.png")} alt="" className="bj-2"/>
                                <img src={require("../styles/img/bj-3.png")} alt="" className="bj-3"/>
                                <img src={require("../styles/img/bj-4.png")} alt="" className="bj-4"/>
                                <div id="echarts_6" className="charts"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default IndexContent;
