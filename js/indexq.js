let lxq = (function () {
    //1.获取元素
    let tech = document.getElementById('tech');
    let top2p = document.getElementById('top2p');
    let top2 = document.getElementById('top2');
    let list = document.getElementById('list');
    let Jo = document.getElementById('Jo');
    let JoLi = Jo.getElementsByTagName('li');
    let swiper = document.getElementById('swiper');
    let focus = document.getElementById('focus');
    let dian4 = document.getElementById('dian4');
    let lis = focus.getElementsByTagName('li');
    let left = document.getElementById('leftxq');
    let right = document.getElementById('rightxq');
    let le = document.getElementById('le');
    let ri = document.getElementById('ri');
    let livn = document.getElementById('livn');
    let livn2 = document.getElementById('livn2');
    let uls = document.getElementById('uls');
    let clb = document.getElementById('clb');
    let timer = null;
    let timerr = null;
    let stepp = 0;
    let step = 0;
    let isClick = true;
    let dataMe = null;
    let dataGood = null;
    let data = null;
    let data12p = null;
    let dataJo = null;
    let dataSw = null;
    let dataLiveLeft = null;
    let dataLiveRight = null;




    //2.获取数据
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/data.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                data = JSON.parse(xhr.responseText);
                bindHtml()
            }
        };
        xhr.send();

    }

    function bindHtml() {
        let str = ``;
        data.forEach(function (item, index) {
            str += `<a href="javascript:;" class="sort_middle opC" id="top2p">
                                        <div class="Img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                    </a>`
        });
        top2.innerHTML = str;
    }

    //获取12图数据
    function ajax12p() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/data1.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                data12p = JSON.parse(xhr.responseText);
                bindHtml12p()
            }
        };
        xhr.send();
        console.log(data12p);
    }

    function bindHtml12p() {
        let str = ``;
        data12p.forEach(function (item) {
            str += `<a href="javascript:;" class="a12 opC">
                                        <div class="div12">
                                            <img src="${item.img}" alt="" class="img12">
                                        </div>
                                    </a>`
        });
        list.innerHTML = str;
    }

    //获取Jo数据
    function ajaxJo() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/JOY.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                dataJo = JSON.parse(xhr.responseText);
                bindJo()
            }
        };
        xhr.send();
        console.log(dataJo);
    }

    //绑定Jo数据
    function bindJo() {
        let str = ``;
        dataJo.forEach(function (item, index) {
            str += `<li class="listJ">
                        <div class="ttp">
                            <a href="javascript:;">
                                <img src="${item.top}" alt="">
                                <div class="mohu"></div>
                                <h4>${item.titleB}<span>${item.title}</span></h4>
                            </a>
                        </div>
                        <div class="bbp">
                            <a href="javascript:;" class="opC"><img src="${item.img1}" alt=""></a>
                            <a href="javascript:;" class="opC"><img src="${item.img2}" alt=""></a>
                            <a href="javascript:;" class=" opC nomarr"><img src="${item.img3}" alt=""></a>
                        </div>
                    </li>`;
        });
        Jo.innerHTML = str;
        Nomargin()
    }

    function Nomargin() {
        for (let i = 0; i < JoLi.length; i++) {
            if (i === 2) {
                JoLi[i].classList.add('nomarr')
            } else if (i === 5) {
                JoLi[i].classList.add('nomarr')
            }
        }
    }


    function ajaxSw() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/swiper.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                dataSw = JSON.parse(xhr.responseText);
                bindSw()
            }
        };
        xhr.send();
        console.log(dataSw);
    }

    function bindSw() {
        let str = ``;
        dataSw.forEach(function (item) {
            str += `<div class=" kuair ">
                    <div class="bo_xhd">
                        <a href="javascript:;" class="box_hd_lk"><h3 class="box_tit">${item.left}</h3>
                            <i class="box_hd_arrow"></i>
                            <span class="box_subtit">${item.right}</span></a>


                    </div>
                    <div><a href="javascript:;"><img src="${item.img}" alt="" class="opC"></a></div>
                </div>`
        });
        str += `<div class=" kuair ">
                    <div class="bo_xhd">
                        <a href="javascript:;" class="box_hd_lk"><h3 class="box_tit">${dataSw[0].left}</h3>
                            <i class="box_hd_arrow"></i>
                            <span class="box_subtit">${dataSw[0].right}</span></a>


                    </div>
                    <div><a href="javascript:;"><img src="${dataSw[0].img}" alt="" class="opC"></a></div>
                </div>`;
        str += `<div class=" kuair ">
                    <div class="bo_xhd">
                        <a href="javascript:;" class="box_hd_lk"><h3 class="box_tit">${dataSw[1].left}</h3>
                            <i class="box_hd_arrow"></i>
                            <span class="box_subtit">${dataSw[1].right}</span></a>


                    </div>
                    <div><a href="javascript:;"><img src="${dataSw[1].img}" alt="" class="opC"></a></div>
                </div>`;
        str += `<div class=" kuair ">
                    <div class="bo_xhd">
                        <a href="javascript:;" class="box_hd_lk"><h3 class="box_tit">${dataSw[2].left}</h3>
                            <i class="box_hd_arrow"></i>
                            <span class="box_subtit">${dataSw[2].right}</span></a>


                    </div>
                    <div><a href="javascript:;"><img src="${dataSw[2].img}" alt="" class="opC"></a></div>
                </div>`;

        swiper.innerHTML = str;
        utils.css(swiper, 'width', 1200 * (((dataSw.length) / 3) + 1));
    }

    function auto() {
        timer = setInterval(autoMove, 5000)
    }

    function autoMove() {
        if (step >= (dataSw.length) / 3) {
            step = 0;
            utils.css(swiper, 'left', 0)
        }
        step++;
        animate(swiper, {left: -1200 * step}, 350, function () {
            isClick = true;
        });
        focusTip()
    }

    function focusTip() {
        for (let i = 0; i < lis.length; i++) {
            if (step === i) {
                lis[i].classList.add('selected');
            } else {
                lis[i].classList.remove('selected')
            }
            if (step === (dataSw.length) / 3) {
                lis[0].classList.add('selected');
            }
        }
    }

    function focusClick() {
        for (let i = 0; i < lis.length; i++) {
            lis[i].onmouseenter = function () {
                step = i - 1;
                autoMove();
            };
        }
        focus.onmouseenter = function () {
            clearInterval(timer)
        };
        focus.onmouseleave = function () {
            timer = setInterval(autoMove, 5000)
        }
    }

    function click() {
        right.onclick = function () {
            if (isClick) {
                isClick = false;
                autoMove()
            }
        };
        left.onclick = function () {
            if (isClick) {
                isClick = false;
                if (step <= 0) {
                    step = data.length/3;
                    utils.css(swiper, 'left', step * -1200)
                }
                step--;
                animate(swiper, {left: step * -1200},350, function () {
                    isClick = true;
                });
                focusTip()
            }
        };
    }

    function ajaxLiveLeft() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/live1.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                dataLiveLeft = JSON.parse(xhr.responseText);
                bindLiveLeft()
            }
        };
        xhr.send();
    }

    function bindLiveLeft() {
        let str =  ``;
        dataLiveLeft.forEach(function (item) {
            str+=`<a href="javascript:;" class="mina">
                        <div class="mohu mohuu"></div>
                        <div class="lvmg">
                            <img src="${item.img}" alt="">
                        <div class="btn"></div>
                        <div class="neir"><p>${item.con}</p></div>
                        </div>
                    </a>`
        });
        livn.innerHTML =str
    }

    function ajaxLiveRight() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/live2.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                dataLiveRight = JSON.parse(xhr.responseText);
                bindLiveRight()
            }
        };
        xhr.send();
    }

    function bindLiveRight() {
        let str =``;
        dataLiveRight.forEach(function (item) {
            str+=`<a href="javascript:;" class="mina">
                        <div class="mohu mohuu"></div>
                        <div class="lvmg">
                            <img src="${item.img}" alt="">
                        <div class="btn"></div>
                        <div class="neir"><p>${item.con}</p></div>
                        </div>
                    </a>`
        });
        livn2.innerHTML =str;
    }





    return {
        init: function () {
            ajax();
            ajax12p();
            ajaxJo();
            ajaxSw();
            auto();
            focusClick();
            click();
            ajaxLiveLeft();
            ajaxLiveRight();
        }
    }
})();

