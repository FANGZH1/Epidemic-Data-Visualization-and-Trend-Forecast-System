var ec_left1 = echarts.init(document.getElementById('left_1'), 'dark');
var ec_left1_Option = {
	tooltip: {
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
	},
	legend: {
		data: ['新增确诊','新增死亡','新增痊愈'],
		left: "right"
	},
	//标题样式
	title: {
		text: "国内疫情新增概况",
		textStyle: {
			color: 'white',
		},
		left: 'left'
	},
    toolbox: {
        show: true,
        feature: {
			mark : {                                 // '辅助线开关'
				show: true
			},
			dataView : {                            //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
				show: true,                         //是否显示该工具。
				title:"数据视图",
				readOnly: false,                    //是否不可编辑（只读）
				lang: ['数据视图', '关闭', '刷新'],  //数据视图上有三个话术，默认是['数据视图', '关闭', '刷新']
				backgroundColor:"#fff",             //数据视图浮层背景色。
				textareaColor:"#fff",               //数据视图浮层文本输入区背景色
				textareaBorderColor:"#333",         //数据视图浮层文本输入区边框颜色
				textColor:"#000",                    //文本颜色。
				buttonColor:"#c23531",              //按钮颜色。
				buttonTextColor:"#fff",             //按钮文本颜色。
			},
			dataZoom: { //数据缩放视图
			    show: true
			},
            magicType: {
				type: ['line', 'bar']
			}//此处最新版本echarts可设置三个值（stack-堆叠模式）,可自行查看echarts文档
        },
		zlevel:0,                                   //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
		z:2,                                         //所属组件的z分层，z值小的图形会被z值大的图形覆盖
		left:"20%",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
		top:"top",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
		right:"auto",                               //组件离容器右侧的距离,'20%'
		bottom:"auto",                              //组件离容器下侧的距离,'20%'
		width:"auto",                               //图例宽度
		height:"auto",     	
    },
	//图形位置
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		//x轴坐标点开始与结束点位置都不在最边缘
		// boundaryGap : true,

		data: []
	}],
	yAxis: [{
		type: 'value',
		//y轴字体设置

		//y轴线设置显示
		axisLine: {
			show: true
		},
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 100) {
					value = value / 100 + 'k';
				}
				return value;
			}
		},
		//与x轴平行的线样式
		splitLine: {
			show: true,
			lineStyle: {
				// color: '#FFF',
				width: 1,
				// type: 'solid',
			}
		}
	}],
	series: [{
		name: "新增确诊",
		type: 'line',
		smooth: true,
		data: [],
		itemStyle: {
			normal: {
				color: "#FD9E06",//折线点的颜色
				lineStyle: {
					color: "#FD9E06"//折线的颜色
				}	
			}
		}

	},{
		name: "新增死亡",
		type: 'line',
		smooth: true,
		data: [],
		itemStyle: {
			normal: {
				color: "#ff0000",//折线点的颜色
				lineStyle: {
					color: "#ff0000"//折线的颜色
				}	
			}
		}
	},{
		name: "新增痊愈",
		type: 'line',
		smooth: true,
		data: [],
		itemStyle: {
			normal: {
				color: "#12e78c",//折线点的颜色
				lineStyle: {
					color: "#12e78c"//折线的颜色
				}	
			}
		}
	}]
};

ec_left1.setOption(ec_left1_Option)
