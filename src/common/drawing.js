// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
//引入x轴滚动组件
require('echarts/lib/component/dataZoom');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

require("echarts/lib/chart/line");

require("echarts/lib/chart/pie");
//引入散点图
require("echarts/lib/chart/scatter");

export function drawLine(count,name,ID,shape,titleText,state,pieArr) {
//count表示y轴数量,name表示x轴名字，ID表示是哪个dom，shape表示是什么图，state表示是否显示XY轴
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById(ID));
// 绘制图表
var option = {
    baseOption:{
        title: {
            text: titleText
        },
        tooltip: {
                show: true,
        },
        //X轴
        xAxis: {
            show:state,
            type:"category",
            data: name
        },
        //Y轴
        yAxis: {
            show:state
        },
        //直角坐标系底板
        grid:{
    
        },
    
        series: [
            {
            name: '文章数目',
            type: shape,
            data: shape == 'pie' ? pieArr : count
        }
      ],
    }
}
myChart.setOption(option);
}

export function drawComment(count,name,ID) {
    //count表示y轴数量,name表示x轴名字，ID表示是哪个dom，shape表示是什么图，state表示是否显示XY轴
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(ID));
    // 绘制图表

    var option = {
        baseOption:{
            title: {
                text: '留言统计'
            },
            tooltip: {
                    show: true,
            },
            //X轴
            xAxis: {
                show:true,
                type:"category",
                data: name
            },
            //Y轴
            yAxis: {
                show:true
            },
            dataZoom: [
                {   // 这个dataZoom组件，默认控制x轴。
                    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    start: 10,      // 左边在 10% 的位置。
                    end: 30         // 右边在 60% 的位置。
                },
                {   // 这个dataZoom组件，也控制x轴。
                    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                    start: 10,      // 左边在 10% 的位置。
                    end: 30         // 右边在 60% 的位置。
                }
            ],
            series: [{
                name: '留言数量',
                type: 'scatter',
                data: count
            }]
        }
    }
    myChart.setOption(option);
}