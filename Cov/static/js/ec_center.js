var ec_center = echarts.init(document.getElementById('center_2'),'dark');


//var mydata = [{'name': '上海', 'value': 318}, {'name': '云南', 'value': 162}];


var ec_center_option = {
    title: {
        text: '',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontsize: 8,
            color: '#ffffff',
        },
        splitList: [{start: 1, end: 9},
            {start: 10, end: 99},
            {start: 100, end: 999},
            {start: 1000, end: 4999},
            {start: 5000, end:9999},
			{start: 10000}],
        color: ['#2b0006','#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series:[{
        name:'累计确诊人数',
        type: 'map',
        mapType:'china',
        roam: false,//拖动缩放
        itemStyle: {
            normal: {
                borderWidth:.5,//边框宽度
                borderColor:'#009fe8',//边框颜色
                areaColor:'#ffefd5',//区域颜色
            },
            emphasis:{//鼠标滑过高亮设置
                orderWidth:.5,
                borderColor:'#fff016',
                areaColor:'#ffffff',
            }
        },
        label: {
            normal: {
                show: true,
                fontsize: 8,
                color:'#ffffff',
            },
            emphasis: {
                show: true,
                fontsize: 8,
            }
        },
        data: [] //mydata
    }]
};
ec_center.setOption(ec_center_option)
