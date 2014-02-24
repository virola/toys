/**
 * MAIN.JS
 */

define(function (require) {

    require('zrender');
    require('echarts');

    /**
     * 初始化方法
     * @type {Function}
     */
    var init = function () {
        require('visualize').init();
    };

    return {
        init: init
    };
});