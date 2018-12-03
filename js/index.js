let lc =(function () {
    let contList = document.getElementById('contList');
   /* let moreList = document.getElementById('moreList');*/
    let uls =document.getElementById('moreList');
    let lis =uls.getElementsByTagName('li');
    let data = null;

    function ajaxMore() {
        var xhr = new XMLHttpRequest();
        xhr.open('get','data/product.json',false);
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4&&xhr.status==200){
                data= JSON.parse(xhr.responseText);
                bindHtmlMore(data);
            }
        };
        xhr.send();
    }


    function bindHtmlMore(data){
        var str = ``;
        data.forEach(function(item,index){
            str+=`
 
            <li class="item clear">
            <a href="javascript:;" class="link">
                <div class="lazyImg">
                    <img src="${item.img}" alt="" class="img">
                </div>
                <div class="moreInfo">
                    <p class="info">${item.info}</p>
                    <div class="price">
                            <i>￥</i>
                            <span class="money">${item.money}</span>
                    </div>
                </div>
            </a>
            <div class="hidden">
            <div class="similar clear"><a href="javascript:;">找相似</a></div>
        </div>
            </li>
                `
        });
        moreList.innerHTML = str
    }
    return{
        init:function () {
            ajaxMore()
        }
    }
})();



