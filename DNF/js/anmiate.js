(function () {
    let utils = (function () {
        function getCss(ele,attr) {
            var value = window.getComputedStyle(ele)[attr];
            var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;
            //验证是否是带单位的值，如果带的话，去掉单位的数字
            if(reg.test(value)){
                value = parseInt(value)
            }
            return value
        }
        function setCss(ele,attr,value) {
            //box width 100
            var reg = /^width|height|fontSize|(margin|padding)?(left|top|right|bottom)|(margin|padding)$/i;
            //判断传进来的属性是否正则匹配的属性，如果匹配，判断一下要设置的属性值是否带有单位，决定是否给其添加单位
            if(reg.test(attr)){
                /px/.test(value.toString())?null:value+='px'
            }
            ele.style[attr]=value
        }
        function setGroupCss(ele,obj={}) {
            if (obj instanceof Object) {
                for (var key in obj){
                    //for in循环会便利obj这个对象上所有的可枚举属性
                    //可枚举属性：obj上的私有属性和手动给obj设置的公有属性
                    //obj天生自带的公有属性，属于obj的不可枚举属性
                    if(obj.hasOwnProperty(key)){
                        //我们只需要obj上的私有属性，通过hasOwnProrerty这个属性拿到它是私有属性进行循环设置
                        setCss(ele,key,obj[key])
                    }
                }
            }
        }
        function css(...arg) {
            //判断传入的参数的个数，如果个数为3个的时候，那么我们使用setCss
            if(arg.length===3){
                setCss(...arg)
            }else{
                //判断传入的第二个参数为一个对象的时候，我们调用setGroupCss这个方法进行批量设置
                if(Object.prototype.toString.call(arg[1])=== '[object Object]'){
                    setGroupCss(...arg)
                }else{
                    //否则属于获取到当前元素的属性
                    return getCss(...arg)
                }
            }
        }
        return {
            css:css
        };
    })();
    let linear = function (time,duration,change,begin) {
        return time/duration*change+begin
    };
    //参数1是当前元素、参数2是元素运动的终点、参数3是花费的时间、参数4callback，动画完成之后的回调函数
    window.animate = function (ele,target={},duration,callback) {
        //如果没有给时间但是设置了回调函数
        if(typeof duration==='function'){
            //就让形参callback等于，设置的那个函数
            callback=duration;
            //时间给一个默认值 2000
            duration=2000;
        }
        //开始给change进行设置
        let change={},timer=0,begin={};
        //需要循环target里面的每一项
        for(var key in target){
            //拿到begin这个对象中的属性键值对，就是元素一开始身上原有的属性值
            begin[key]=utils.css(ele,key);
            //计算change【要改变的属性】通过让终点的值减去起点的值求出change当中的每一个值
            change[key]=target[key]-begin[key]
        }
        //在元素的自定义属性上添加一个定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(()=>{
            //定时器执行的时候让timer每一次都加17
            timer+=17;
            //当timer时间大于我们设置的终点时间时
            if(timer>=duration){
                //清除定时器
                clearInterval(ele.timer);
                //把元素设置为终点的值
                utils.css(ele,target);
                //判断回调函数是否存在，让回调函数执行，让回调函数中this变成当前的元素
                callback&&callback.call(ele);
                //加return不在让下面的代码执行
                return;
            }
            //要让元素发生动画需要循环change
            for(var key in change){
                //求出每一项要改变的属性的值通过匀速直线运动公式
                var cur = linear(timer,duration,change[key],begin[key]);
                //通过utils给元素设置上
                utils.css(ele,key,cur)
            }
        },17)
    }

})();
/*
animate(box,{width:200,height:300},3000,function () {

});*/
