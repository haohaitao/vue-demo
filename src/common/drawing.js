export function drawLine(count,name) {
	// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('content'));
// 绘制图表
myChart.setOption({
    title: {
        text: '文章分类统计'
    },
    tooltip: {
        			show: true,
			trigger: 'axis',
			axisPointer: {
				//type: 'cross', 
				label: {
					backgroundColor: '#6a7985' //实现折线图鼠标移入显示的颜色
				}
			}
    },
    //X轴
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    //Y轴
    yAxis: {

    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
})
}