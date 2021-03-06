(function () {
    let utils = (function () {
        function getCss(ele, attr) {
            var value = window.getComputedStyle(ele)[attr];
            var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;

            //验证是否带单位的值，如果带的话，去掉单位转化成数字
            if (reg.test(value)) {
                value = parseInt(value)
            }
            return value
        }

        /*yuan'su'de
         * 设置当前元素的样式
         * ele.style.xxx = xxx
         * */
        function setCss(ele, attr, value) {
            var reg = /^width|height|fontSize|(margin|padding)?(left|right|top|bottom)|(margin|padding)$/i;
            //判断传进来的属性是否是正则匹配的属性，如果匹配，判断一下要设置的属性值是否带有单位，决定是否给其添加单位
            if (reg.test(attr)) {
                // debugger;
                /px/.test(value.toString()) ? null : value += 'px'
                /*/^(px|pt|em|rem)$/*/
            }
            ele.style[attr] = value;
        }

        /*
         * debugger 断点，主要适用于调试js代码用的
         * debugger：写再哪一行，js运行到哪一行就会暂停【除非没有加载到哪一行js语句】debugger不会让浏览器运行js暂停
         * F8:跳转到下一个断点位置
         * F10；跳转下一行代码，但是不会进入到函数中进行逐行调试
         * F11:会逐行及逆行调试【包括进入到函数中逐行调试】
         * */


        /*
         * 批量给元素设置样式
         * */
        function setGtoupCss(ele, obj = {}) {
            if (obj instanceof Object) {
                for (var key in obj) {
                    //for in 循环会便利obj这个对象上的可枚举属性
                    //可枚举属性；obj上的私有属性和手动给obj设置的共有属性
                    //obj天生自带的公有属性，属于obj的不可枚举属性
                    if (obj.hasOwnProperty(key)) {
                        //我们只需要obj上的私有属性，通过hasOwnProperty这个属性拿到他是私有属性进行循环设置
                        setCss(ele, key, obj[key])
                    }
                }
            }
        }

        /*
         *将getCss和setCss和setGtoupCss绑定到一起，封装成一个方法css
         *
         * */
        function css(...arg) {
            //判断传入的参数的个数，如果个数为3个的时候，那么我们使用的setCss
            if (arg.length === 3) {
                setCss(...arg)
            } else {
                //如果传入的第二个参数为一个对象的时候，我们调用的setGtoupCss这个方法进行设置
                if (Object.prototype.toString.call(arg[1]) === '[object Object]') {
                    setGtoupCss(...arg)
                } else {
                    //否则属于获取到当前元素的属性
                    return getCss(...arg)
                }
            }
        }

        return {css}
    })();
    // 匀速直线运动
    let leaner = function (time, duration, change, begin) {
        return time / duration * change + begin
    };

    function animate(ele, target = {}, duration, callback) {
        if (typeof duration === 'function') {
            callback = duration;
            duration = 2000;
        }
        let begin = {}, change = {}, time = 0;
        for (var key in target) {
            //我们可以拿到元素最开始的值，赋值给begin
            begin[key] = utils.css(ele, key);
            //可以求出元素要改变的距离
            change[key] = target[key] - begin[key];
        }
        // 在下一个进行设置的定时器，我们需要把上一个定时器清除
        clearInterval(ele.timer);
        ele.timer = setInterval(() => {
            time += 17;
            //如果时间到达后，清除定时器
            if (time >= duration) {
                clearInterval(ele.timer);
                utils.css(ele, target);
                //检测回调函数是否是一个函数，如是的话让回调函数执行，并且改变回调函数中的this，让this等于当前操作的元素
                if (typeof callback === 'function') {
                    callback.call(ele);
                }
                return
            }
            for (var key in change) {
                //循环change中的每一项 拿到我们要设置的值,cur会跟据time的不同，不断的进行更新；
                var cur = leaner(time, duration, change[key], begin[key]);
                //拿到每次更新的值，设置给操作的元素
                utils.css(ele, key, cur)
            }
        }, 17)
    }

    //通过给全局变量赋值，我们可以在外面进行调用
    window.animate = animate;
    window.utils = utils;

})();
