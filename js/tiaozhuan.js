
/**
 * Created by lenovo on 2018/10/2.
 */
var iqiyiApi ='search.jd.com/Search?keyword=d&enc=utf-8&pvid=c5f1007a69fb407693e009867ad9d458'
//oninput：输入框正在输入内容的时候

//https://search.jd.com/Search?keyword=d&enc=utf-8&wq=d&pvid=bde10f8f3fc24a9fbb97ec89e24875bb

//https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key=d&pvid=be51838172744e6c866368ba6adc41af&t=1538448606570&curr_url=search.jd.com%2FSearch&search_key=d&callback=jQuery1741145


//https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key=d&pvid=c5f1007a69fb407693e009867ad9d458&t=1538447845954&curr_url=search.jd.com%2FSearch&search_key=d&callback=jQuery451831



//https://search.jd.com/Search?keyword=d&enc=utf-8&pvid=c5f1007a69fb407693e009867ad9d458
$(function (){
    $('#search').on('input',function (e){
        //所有的jq对象都有data这个属性，这个属性就是用来存数据的，data是一个方法，里面是一个对象，$(this).data('wd':'1')
//        $(this).data('wd',1);
        /*
         * 1. 将你输入的值存一份，
         * 2. 如果值存在就开始发送请求
         * */
        var val = $(this).val();//输入框的值
        if(val){
            //保存输入框中开始的值，通过data方法存到jq对象上
            $(this).data('keyword',val)
            $.ajax({
                //百度搜索关键字请求【API文档】


                url:'https://dd-search.jd.com/?terminal=pc&newjson=1&ver=2&zip=1&key=d&pvid=be51838172744e6c866368ba6adc41af&t=1538448606570&curr_url=search.jd.com%2FSearch&search_key=d&callback=jQuery1741145',
                type:'get',
                data:{
                    //data是发送给后台的数据，wd就是查询的关键字【就是你输入框的内容】
                    wd:val,
                    json:1,
                },
                dataType:'jsonp',//jsonp跨域【ajax不能跨域】
                jsonp:'cb',//跨域指定函数名
                success:function (data1){
//                    console.log(data1.g)
                    //我们的数据存在返回的属性名的g里面
                    bindData(data1.g);
                },
                error:function (){
                    console.log('error~~');
                }
            })
        }else{
            $('.searchList').stop().hide();
        }
    });
    function bindData(data){
        //data = data1.g
        var str1=``;
        $.each(data,function (index,item){
            //this data中的每一项都是一个原生对象
            str1+=`<li><a href="javascript:;">${this.q}</a></li>`;
        });
        $('.searchList').html(str1).show();
    };
    var code=-1;//选择的时候，到了索引为0，还可以继续往上减一个，输入框中间变成初始的那个值
    $('#search').on('keydown',function (e){
        //e.keyCode//存的就是你按键的那个值，
        if(e.keyCode==38){
            //键盘上的up键；
            code--;
            if(code<=-2){
                code=$('.searchList li:last').index();//如果减到-2了，让他变成最后一个，
                $('.searchList li:last').addClass('select');
            }
            else if(code==-1){
                //让输入框变成初始的值
                $(this).val($(this).data('wd'));
                $('.searchList li').removeClass('select')
                return;
            }else{
                $('.searchList li').eq(code).addClass('select').siblings().removeClass('select');
            };
            $('#search').val($('.searchList li').eq(code).text());
        }else if(e.keyCode==40){
            code++;//下
            if(code>$('.searchList li:last').index()){
                code=-1;
                $('.select').removeClass('select');
                $('#search').val($(this).data('wd'));
                return;
            }
            $('.searchList li').eq(code).addClass('select').siblings().removeClass('select');
            $(this).val($('.searchList li').eq(code).text());
        }
        else if(e.keyCode==13){
            //跳转百度
            var url = "https://www.jd.com/s?rsv_idx=1&wd="+$(this).val();
            window.location.href=url//当前页面地址改了这个url；
        }
        //点击跳转
        $('.searchList').on('click','li',function (e){
            $('#search').val($(this).text());
            window.location.href="https://www.jd.com/s?rsv_idx=1&wd="+$(this).text();
        });
        $('.rightBtn').on('click',function (e){
            window.location.href="www.jd.com/s?rsv_idx=1&wd="+$("#search").val();
        })
    })
})