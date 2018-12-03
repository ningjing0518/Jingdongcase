let Kp = (function () {
    let box_ul = document.getElementById('box_ul');
    let yg_ul = document.getElementById('yg_ul');
    let kpdata = null;
    let YgData = null;
    let coop_ul = document.getElementById('coop_ul');
    let cpdata = null;
    let a1 = document.getElementById('bo_a1');
    let a2 = document.getElementById('bo_a2');
    let sp1 = document.getElementById('wai_a1');
    let sp2 = document.getElementById('wai_a2');


    function kpajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/kp.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                kpdata = JSON.parse(xhr.responseText);
                kpbindHtml()
            }
        };
        xhr.send();
        console.log(kpdata);
    }

    function kpbindHtml() {
        let Str = ``;
        kpdata.forEach(function (item, index) {
            Str += `   <li class="box_li">
     <div class="t_time red_time">
                            <em class="J-t-staus">拍卖中</em><br>
                            <span class="J_t_time">
                                <em  class="time_hour"></em>
                                <em  class="time_fen"></em>
                                <em  class="time_miao"></em>
                            </span>
                        </div>
   
   
                        <div class="box_img">
                            <a href="">
                                <img src="${item.img}" alt="">
                            </a>
                        </div>
                        <dl class="p-name">
                            <dt>
                                <a href="javascript:;" class="name-a">${item.title}</a>
                            </dt>
                            <dd>
                                <span>送拍机构:</span>
                                <em>${item.em}</em>
                            </dd>
                            <dd>
                                <span>出价次数:</span>
                                <span class="price-times J-p-num">${item.span}</span>
                            </dd>
                        </dl>
                        <ul class="p-bot">
                            <li class="p-bot-li">
                                <div class="bot-t">
                                    <a href="javascript:;" >
                                        <img src="${item.img1}" class="bot-img">
                                    </a>
                                </div>
                                <div class="bot-text">
                                    <span>当前价:</span>¥<em class="text-em">${item.em1}</em>
                                </div>
                            </li>
                            <li class="p-bot-li">
                                <div class="bot-t">
                                    <a href="javascript:;" >
                                        <img src="${item.img2}" class="bot-img">
                                    </a>
                                </div>
                                <div class="bot-text">
                                    <span>当前价:</span>¥<em class="text-em">${item.em2}</em>
                                </div>
                            </li>
                            <li class="p-bot-li">
                                <div class="bot-t">
                                    <a href="javascript:;" >
                                        <img src="${item.img3}" class="bot-img">
                                    </a>
                                </div>
                                <div class="bot-text">
                                    <span>当前价:</span>¥<em class="text-em">${item.em3}</em>
                                </div>
                            </li>
                        </ul>
                        <div class="red-xian"></div>
                    </li>`
        });
        box_ul.innerHTML = Str;
    }

    function YgAjax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/yg.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                YgData = JSON.parse(xhr.responseText);
                ygbindHtml()
            }
        };
        xhr.send();
        console.log(YgData);
    }

    function ygbindHtml() {
        let Str1 = ``;
        YgData.forEach(function (item, index) {
            Str1 += `   <li class="box_li">
     <div class="t_time green_time">
                            <em class="J-t-staus">预告中</em><br>
                            <span class="J_t_time">
                                <em  class="time_hour"></em>
                                <em  class="time_fen"></em>
                                <em  class="time_miao"></em>
                            </span>
                        </div>
   
   
                        <div class="box_img">
                            <a href="">
                                <img src="${item.img}" alt="">
                            </a>
                        </div>
                        <dl class="p-name">
                            <dt>
                                <a href="javascript:;" class="name-a">${item.title}</a>
                            </dt>
                            <dd>
                                <span>送拍机构:</span>
                                <em>${item.em}</em>
                            </dd>
                            <dd>
                                <span>出价次数:</span>
                                <span class="price-times J-p-num">${item.span}</span>
                            </dd>
                        </dl>
                        <ul class="p-bot">
                            <li class="p-bot-li">
                                <div class="bot-t">
                                    <a href="javascript:;" >
                                        <img src="${item.img1}" class="bot-img">
                                    </a>
                                </div>
                                <div class="bot-text">
                                    <span>当前价:</span>¥<em class="text-em">${item.em1}</em>
                                </div>
                            </li>
                            <li class="p-bot-li">
                                <div class="bot-t">
                                    <a href="javascript:;" >
                                        <img src="${item.img2}" class="bot-img">
                                    </a>
                                </div>
                                <div class="bot-text">
                                    <span>当前价:</span>¥<em class="text-em">${item.em2}</em>
                                </div>
                            </li>
                            <li class="p-bot-li">
                                <div class="bot-t">
                                    <a href="javascript:;" >
                                        <img src="${item.img3}" class="bot-img">
                                    </a>
                                </div>
                                <div class="bot-text">
                                    <span>当前价:</span>¥<em class="text-em">${item.em3}</em>
                                </div>
                            </li>
                        </ul>
                        <div class="red-xian"></div>
                    </li>`
        });
        yg_ul.innerHTML = Str1;
    }

    function hzajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/hz.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                cpdata = JSON.parse(xhr.responseText);
                cpbindHtml()
            }
        };
        xhr.send();
        console.log(cpdata);
    }

    function cpbindHtml() {
        let Str2 = ``;
        cpdata.forEach(function (item, index) {
            Str2 += `<li class="coop_li">
                          <a href="" class="coop_a">
                              <img src="${item.img}" alt="" class="coop_img">
                          </a>
                          <p class="coop_P">
                              <a href="" class="p_a">${item.title}</a>
                          </p>
                      </li>`
        });
        coop_ul.innerHTML = Str2;
    }


    function jin() {
        a1.onmouseenter = function () {
            animate(sp1, {left: 450}, 250);
            /*   animate(sp1, {opacity: 1}, 400);*/

        };
        a2.onmouseenter = function () {
            animate(sp2, {left: 450}, 250);
            /*  animate(sp2, {opacity: 1}, 400);*/

        };a1.onmouseleave = function () {
            utils.css(sp1, 'left', 130);

        };a2.onmouseleave = function () {
            utils.css(sp2, 'left', 130)
        }
    }



    let cdh = document.getElementById('cdh');
    let floor_nav = document.getElementById('floor_nav');
    let con = document.getElementById('con');
    let top = document.getElementById('zp-back-top');
    let floor_navChild = floor_nav.children;
    let conChild = con.children;
    let wT = utils.win('scrollTop');
    let wH = utils.win('clientHeight') / 2;
    let yin = document.querySelector('.yin');



    function scrollFn() {

        let wT = utils.win('scrollTop');
        let wH = utils.win('clientHeight') / 2;
        let wTT = utils.win('scrollTop');
        let wHH = utils.win('clientHeight');
        if (wT > wH ) {
            cdh.style.display = 'block';

        } else {
            cdh.style.display = 'none';

        }
        if(wTT > wHH){
            yin.style.display = 'block'
        }else {
            yin.style.display = 'none'

        }        for (var i = 0; i < floor_navChild.length; i++) {
            if (wT + wH >= conChild[i].offsetTop) {
                for (var j = 0; j < floor_navChild.length; j++) {
                    floor_navChild[j].className = "";
                }
                floor_navChild[i].className = "hbj";
            }
        }
    }

    function hq() {
        top.onclick = function () {
            this.timer = setInterval(() => {
                let winT = utils.win('scrollTop');
                winT -= 100;
                if (winT <= 0) {
                    clearInterval(this.timer); 
                    utils.win('scrollTop', 0);
                    return;
                }
                utils.win('scrollTop', winT);
            }, 17)

        }
    }



    return {
        init: function () {
            kpajax();
            YgAjax();
            hzajax();
            window.onscroll = scrollFn;
            hq();
            jin();

        }

    }
})();
new Kp.init();
