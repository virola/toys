
var _vars = {
    yCat: ['']
};


option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['任务1','任务2','任务3','任务4']
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitArea : {show : true}
        }
    ],
    series : [
        {
            name:'任务1',
            type:'line',
            stack: '总量',
            symbol: 'none',
            itemStyle: {
                normal: {
                    areaStyle: {
                        // 区域图，纵向渐变填充
                        color : (function(){
                            var zrColor = require('zrender/tool/color');
                            return zrColor.getLinearGradient(
                                0, 200, 0, 400,
                                [[0, 'rgba(255,0,0,0.8)'],[0.8, 'rgba(255,255,255,0.1)']]
                            )
                        })()
                    }
                }
            },
            data:[120, 132, 301, 134, 90, 230, 210]
        },
        {
            name:'任务2',
            type:'line',
            stack: '总量',
            smooth: true,
            symbol: 'emptyCircle',     // 系列级个性化拐点图形
            symbolSize: 8,
            data:[
                120, 82,
                {
                    value:201,
                    symbol: 'star',  // 数据级个性化拐点图形
                    symbolSize : 15,
                    itemStyle : { normal: {label : {
                        show: true,
                        textStyle : {
                            fontSize : '20',
                            fontFamily : '微软雅黑',
                            fontWeight : 'bold'
                        }
                    }}}
                },
                {
                    value:134,
                    symbol: 'none'
                },
                190, 230, 110
            ]
        },
        {
            name:'任务3',
            type:'line',
            stack: '总量',
            symbol: 'arrow',
            symbolSize: 6,
            symbolRotate: -45,
            itemStyle: {
                normal: {
                    color: 'red',
                    lineStyle: {        // 系列级个性化折线样式
                        width: 2,
                        type: 'dashed'
                    }
                },
                emphasis: {
                    color: 'blue'
                }
            },
            data:[
                320, 332, '-', 334,
                {
                    value: 390,
                    symbol: 'star6',
                    symbolSize : 20,
                    symbolRotate : 10,
                    itemStyle: {        // 数据级个性化折线样式
                        normal: {
                            color: 'yellowgreen'
                        },
                        emphasis: {
                            color: 'orange',
                            label : {
                                show: true,
                                position: 'inside',
                                textStyle : {
                                    fontSize : '20'
                                }
                            }
                        }
                    }
                },
                330, 320
            ]
        },
        {
            name:'任务4',
            type:'line',
            symbol:'emptyCircle',
            itemStyle: {
                normal: {
                    lineStyle: {            // 系列级个性化折线样式，横向渐变描边
                        width: 2,
                        color: (function(){
                            var zrColor = require('zrender/tool/color');
                            return zrColor.getLinearGradient(
                                0, 0, 1000, 0,
                                [[0, 'rgba(255,0,0,0.8)'],[0.8, 'rgba(255,255,0,0.8)']]
                            )
                        })(),
                        shadowColor : 'rgba(0,0,0,0.5)',
                        shadowBlur: 10,
                        shadowOffsetX: 8,
                        shadowOffsetY: 8
                    }
                },
                emphasis : {
                    label : {show: true}
                }
            },
            data:[620, 732, 791, 734, 890, 930, 820]
        }
    ]
};
                    