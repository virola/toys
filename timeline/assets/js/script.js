$(function(){

    VMM.Util.date.month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    VMM.Util.date.month_abbr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    VMM.Util.date.day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    VMM.Util.date.day_abbr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    var timeline = new VMM.Timeline();
    timeline.init("data.json");

    $(document).keydown(function (e) {
        if (e.keyCode == 39) {
            $('.nav-next').css('display') == 'block' && $('.nav-next').trigger('click');
        } else if (e.keyCode == 37) {
            $('.nav-previous').css('display') == 'block' && $('.nav-previous').trigger('click');
        }
    });

});