import React, { Component } from 'react';
import echarts from "echarts/lib/echarts";
// 引入折线图
import  'echarts/lib/chart/line';
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
                text: '价格趋势',
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
                    data: minPrice
                },
                {
                    name:'平均价',
                    type:'line',
                    stack: '总量',
                    data:  avgPrice
                },
                {
                    name:'最高价',
                    type:'line',
                    stack: '总量',
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
