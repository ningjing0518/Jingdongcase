let $t_time = $('.t-time'),
    $J_t_time = $('.J_t_time'),
    $time_hour = $('.time_hour'),
    $time_fen = $('.time_fen'),
    $time_miao = $('.time_miao');
$(function () {
    show_time();
});

function show_time() {
    var time_start = new Date().getTime(); //设定当前时间
    var time_end = new Date("2018/10/15 00:00:00").getTime(); //设定目标时间
    // 计算时间差
    var time_distance = time_end - time_start;
    // 天
    var int_day = Math.floor(time_distance / 86400000);
    time_distance -= int_day * 86400000;
    // 时
    var int_hour = Math.floor(time_distance / 3600000);
    time_distance -= int_hour * 3600000;
    // 分
    var int_minute = Math.floor(time_distance / 60000);
    time_distance -= int_minute * 60000;
    // 秒
    var int_second = Math.floor(time_distance / 1000);
    // 时分秒为单数时、前面加零
    if (int_day < 10) {
        int_day = "0" + int_day;
    }
    if (int_hour < 10) {
        int_hour = "0" + int_hour;
    }
    if (int_minute < 10) {
        int_minute = "0" + int_minute;
    }
    if (int_second < 10) {
        int_second = "0" + int_second;
    }
    // 显示时间
    if (time_end <= time_start) {
        $('.J_t_time').html("活动已经结束"); //如果结束日期小于当前日期就提示过期啦
        $('.t_time').removeClass('red_time').addClass('end')//背景变成灰色移除红的

    } else {
        $(".time_hour").html(int_hour + '时');
        $(".time_fen").html(int_minute + "分");
        $(".time_miao").html(int_second + "秒");
        $('.t_time').removeClass('end').addClass('red_time');//移除黑色添加红色
    }

    // 设置定时器
    setTimeout("show_time()", 1000);
}