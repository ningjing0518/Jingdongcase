var utils = (function () {
    let flag = 'getComputedStyle'in window;
    /*
    * 获取当前浏览器的可视化窗口*/
    function win(key,value) {
        if(value==undefined){
            //获取一个属性值
            return document.documentElement[key]||document.body[key]
        }
        document.documentElement[key]=value;
        document.body[key]=value
    }

    /*
    * 获取当前元素距离body的距离
    */
    function offset(ele) {
        let l = ele.offsetLeft;
        let t = ele.offsetTop;
        let parent = ele.offsetParent;
        while (parent.tagName !== 'BODY'){
             l += parent.clientLeft+parent.offsetLeft;
             t += parent.offsetTop+parent.clientTop;
             //需要不断的去更新父级参照物
            parent=parent.offsetParent
        }
        return {left:l,top:t}
    }
    /*
    * 类数组转数组的方法
    * */
    function toArray(likeAry) {
        try{
            return [].slice.call(likeAry)
        }catch (e){
            //证明当前浏览器是ie6-8
            let newAry = [];
            for (var i = 0; i < likeAry.length; i++) {
                newAry[newAry.length] = likeAry[i]
            }
        }
    }

    /*
    * JSON字符串转JSON对象
    * eval非常耗费性能，不建议使用
    *
    * */
    function toJSON(str) {
        try{
            return JSON.parse(str)
        }catch(e){
            return eval('('+str+')')
        }

    }
    /*
    * 获取n到m之间的一个随机数字
    *
    *
    * Math.round(Math.random()*(m-n)+n)
    *
    * */
    function getRandom(n,m) {
        n = Number(n);
        m = Number(m);
        if(n>m){
            [n,m]=[m,n]
        }
        return Math.round(Math.random()*(m-n)+n)
    }

    /*
    * 获取当前元素的样式
    * window.getComputedStyle
    * window.currentStyle
    * */
    /*
     * 如果我们想要拿到内嵌中的样式
     * 参数1：当前元素，参数2：元素上的伪类【默认不写】
     * ComputedStyle:获取当前元素计算后的样式,在内嵌中 标准浏览器
     * currentStyle:Ie6-8 浏览器内嵌样式获取
     *
     * */
    function getCss(ele,attr) {
        var value = window.getComputedStyle(ele)[attr];
        var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;
        //验证是否是带单位的值，如果带的话，去掉单位的数字
        if(reg.test(value)){
            value = parseInt(value)
        }
        return value
    }

    /*
    * 设置当前元素的样式
    * ele.style.xxx=xxx
    * */
    function setCss(ele,attr,value) {
        //box width 100
        var reg = /^width|height|fontSize|(margin|padding)?(left|top|right|bottom)|(margin|padding)$/i;
        //判断传进来的属性是否正则匹配的属性，如果匹配，判断一下要设置的属性值是否带有单位，决定是否给其添加单位
        if(reg.test(attr)){
            /px/.test(value.toString())?null:value+='px'
        }
        ele.style[attr]=value
    }
    /*
    * 批量给元素设置样式
    *
    * */
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

    /*
    * 将gerCss和setCss和setGroupCss绑定到一起，封装成一个方法CSS
    *
    * */
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

    /*
    * debugger:断点，主要是用于调试js代码用的
    * debugger:写在哪一行，js运行到哪一行就会暂停【除非没有加载到哪一行js语句】
    * debugger:不会让浏览器暂停
    * f8：跳转到下一个断点位置
    * f10：跳转下一行js代码，但是不会进入到函数中进行逐行调试
    * f11：会逐行进行调试，包括会进入到函数中
    * */




    //封装一个each方法实现 类数组 数组 对象都可以进行便利
    //先进行判断这个传进来的第一个参数是一个什么数据类型如果是个对象，那把对象转成数组的进行便利
    //


    function eachall(obj,fn) {
       if('length' in obj){
           for (var i = 0; i < obj.length; i++) {
               let cur = fn&&fn.call(obj[i],i,obj[i]);
               if(cur===false){
                   break;
               }
           }
       }else{
           for(var key in obj){
               let cur = fn&&fn.call(obj[key],key,obj[key]);
               if(cur===false){
                   break;
               }
           }
       }
    }

    return {
        win,
        toArray,
        offset,
        toJSON,
        getRandom,
        getCss,
        setCss,
        setGroupCss,
        css,
        eachall
    }


})();
























