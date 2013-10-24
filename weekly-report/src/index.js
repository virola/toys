
var common = (function () {
    var exports = {};

    /**
     * 设置今天的日期
     */
    exports.setTodayText = function () {
        var today = new Date();
        var todayText = today.toLocaleDateString();
        var weekArr = ['日', '一', '二', '三', '四', '五', '六'];

        todayText += ' 星期' + weekArr[today.getDay()];

        $('#today-date').text(todayText);
    };

    var now = +new Date();

    exports.getUID = function () {
        return 'project' + now++;
    };

    return exports;
})();

/**
 * 项目处理模块
 * 
 * @type {Oject}
 */
var project = (function () {

    var exports = {};

    // 总项目表单行数
    var _projectCount = 0;

    var formArea = $('#form-area');

    var tplProject = $('#tpl-project').html();

    exports.add = function (container) {
        $(container).append(tplProject);

        var row = getRow(_projectCount);
        $(row).attr('data-id', common.getUID());

        initRowEvents(row);
        _projectCount++;

    };

    /**
     * 保存一行项目
     * 
     * @param {number} index 项目索引
     */
    exports.save = function (index) {
        var row = getRow(index);
        var saveBtn = $(row).find('.project-save:first');

        saveSubmit(getRowData(index), function (data, err) {
            if (err) {
                
                // error
                return;
            }
            
            var spanText = saveBtn.next('.text-info');
            if (spanText.size() == 0) {
                $('<span class="text-info"></span>')
                    .insertAfter(saveBtn);
            }
            

        });
    };

    var URL_SAVE = TPLDATA.urlProjectSave;

    function saveSubmit(data, callback) {
        callback = callback || new Function();

        $.post(URL_SAVE, data, function (json) {
            callback(json.data);
        }, 'json').fail(function () {
            // fail
            callback(null, true);
        });
    }

    exports.import = function (data) {
        // todo
    };

    /**
     * 获取第几行项目表单
     * 
     * @param {number} index 索引数
     */
    function getRow(index) {
        return formArea.children().get(index);
    }

    function getRowData(index) {
        var data;
        var row = getRow(index);

        if (row) {
            data = $(row).find('.project-form').serializeArray();
        }

        console.log(data);
        return data;
    }

    /**
     * 绑定行内事件
     * 
     * @param {Object} row 表单行
     */
    function initRowEvents(row) {
        var projectId = $(row).attr('data-id');

        // tooltip
        $(row).find('.form-control').tooltip({
            placement: 'bottom',
            trigger: 'hover focus'
        });

        // save button
        var saveBtn = $(row).find('.project-save:first');

        saveBtn.click(function () {
            task.add(projectId);
        });
    }

    exports.init = function () {
        $('#btn-create-project').click(function (e) {
            project.add($('#form-area'));
        });
    };

    exports.get = function (id) {
        return $(formArea).find('.project[data-id=' + id + ']:first');
    };

    return exports;
})();

/**
 * 任务处理模块
 * 
 * @type {Object}
 */
var task = (function () {

    var exports = {};

    var tplTask = $('#tpl-task').html();

    exports.add = function (id) {
        var row = project.get(id);
        var container = row.find('.task-list:first');

        container.append(tplTask);
    };

    return exports;
})();

/**
 * 事件初始化
 */
$(function () {

    common.setTodayText();

    $('.btn-toggle-period').dropdown();

    $('#main-tab').tab();

    project.init();
});