


define(function (require) {

    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['任务1','任务2','任务3','任务4']
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap: false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisLabel: {
                    formatter: function (value) {
                        return value.replace(/\d+/, '');
                    }
                },
                splitLine: {
                    show: false
                },
                data : [
                    {
                        'value': 'A1',
                        'show': false,
                        'textStyle': {
                            color: '#fff'
                        }
                    }, 
                    'A2', 'A3', 'A4', 
                    'B1', 'B2', 'B3', 'B4',
                    'C1', 'C2', 'C3', 'C4',
                    'D1', 'D2', 'D3', 'D4'
                ]
            }
        ],
        series : [
            {
                name:'任务1',
                type:'line',
                data:[
                    'A1', 'A1', 'A1', 'A1',
                    '-', '-', '-'
                ]
            },
            {
                name:'任务2',
                type:'line',
                smooth: true,
                symbol: 'emptyCircle',     // 系列级个性化拐点图形
                data:[
                    'B1', 'B1', 'B1', 'B1',
                    'C2', 'C2', 'C2'
                ]
            },
            {
                name:'任务3',
                type:'line',
                data: [
                    'C1', 'C1', 'C1', 'C1',
                    'D2', 'D2', 'D2'
                ]
            },
            {
                name:'任务4',
                type:'line',
                symbol:'emptyCircle',
                data:[
                    'D3', 'D3', 'D3', 'D3',
                    'D4', 'D4', 'D4'
                ]
            }
        ]
    };


    // 正式代码

    var uiChart;
    var echarts;

    function requireCallback(ec) {
        var domMain = document.getElementById('summary-group-project');
        echarts = ec;

        if (uiChart && uiChart.dispose) {
            uiChart.dispose();
        }
        uiChart = echarts.init(domMain);
        uiChart.setOption(option, true);
    }


    function init() {

        // 按需加载
        require(
            [
                'echarts',
                'echarts/chart/line',
                'echarts/chart/bar',
                'echarts/chart/scatter',
                'echarts/chart/k',
                'echarts/chart/pie',
                'echarts/chart/radar',
                'echarts/chart/force',
                'echarts/chart/map'
            ],
            requireCallback
        );
    }

    function update(data) {
        uiChart.setOption(data, true);
    }

    return {
        init : init,
        update : update
    };
});

