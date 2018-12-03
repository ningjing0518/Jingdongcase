let lxq = (function () {
    let ban2 = document.getElementById('ban2');
    let data = null;
    let data3 = null;
    let ba3 = document.getElementById('ba3');
    let ban3 = document.getElementById('ban3');
    let ba2 = document.getElementById('ba2');
    let left2 = document.getElementById('left2');
    let right2 = document.getElementById('right2');
    let left3 = document.getElementById('left3');
    let right3 = document.getElementById('right3');
    let focus3 = document.getElementById('focus3');
    let focus2 = document.getElementById('focus2');
    let lis3 = focus3.getElementsByTagName('li');
    let lis2 = focus2.getElementsByTagName('li');
    let tab2 = document.getElementById('tab1');
    let tab3 = document.getElementById('tab2');
    let tab4 = document.getElementById('tab3');
    let conbody2 = document.getElementById('conbody2');
    let conbody3 = document.getElementById('conbody3');
    let step = 0;
    let step1 = 0;

    function ajaxBan2() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/ban2.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                data = JSON.parse(xhr.responseText);
                bindBan2();
            }
        };
        xhr.send();
        //console.log(data);
    }

    function bindBan2() {
        let str =``;
        data.forEach(function (item) {
            str+=`<ul class="swiper-slide">
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new1}</span><span class="oldpri">￥${item.old1}</span>
                            </div>
                            <img src="${item.img1}" alt="">
                            <p>${item.p1}</p>
                            <div class="goodp">好评率${item.goodp1}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new2}</span><span class="oldpri">￥${item.old2}</span>
                            </div>
                            <img src="${item.img2}" alt="">
                            <p>${item.p2}</p>
                            <div class="goodp">好评率${item.goodp2}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new3}</span><span class="oldpri">￥${item.old3}</span>
                            </div>
                            <img src="${item.img3}" alt="">
                            <p>${item.p3}</p>
                            <div class="goodp">好评率${item.goodp3}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new4}</span><span class="oldpri">￥${item.old4}</span>
                            </div>
                            <img src="${item.img4}" alt="">
                            <p>${item.p4}</p>
                            <div class="goodp">好评率${item.goodp4}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new5}</span><span class="oldpri">￥${item.old5}</span>
                            </div>
                            <img src="${item.img5}" alt="">
                            <p>${item.p5}</p>
                            <div class="goodp">好评率${item.goodp5}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                    </ul>`
        });
        str+=`<ul class="swiper-slide">
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data[0].new1}</span><span class="oldpri">￥${data[0].old1}</span>
                            </div>
                            <img src="${data[0].img1}" alt="">
                            <p>${data[0].p1}</p>
                            <div class="goodp">好评率${data[0].goodp1}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data[0].new2}</span><span class="oldpri">￥${data[0].old2}</span>
                            </div>
                            <img src="${data[0].img2}" alt="">
                            <p>${data[0].p2}</p>
                            <div class="goodp">好评率${data[0].goodp2}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data[0].new3}</span><span class="oldpri">￥${data[0].old3}</span>
                            </div>
                            <img src="${data[0].img3}" alt="">
                            <p>${data[0].p3}</p>
                            <div class="goodp">好评率${data[0].goodp3}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data[0].new4}</span><span class="oldpri">￥${data[0].old4}</span>
                            </div>
                            <img src="${data[0].img4}" alt="">
                            <p>${data[0].p4}</p>
                            <div class="goodp">好评率${data[0].goodp4}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data[0].new5}</span><span class="oldpri">￥${data[0].old5}</span>
                            </div>
                            <img src="${data[0].img5}" alt="">
                            <p>${data[0].p5}</p>
                            <div class="goodp">好评率${data[0].goodp5}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                    </ul>`;
        ban2.innerHTML = str;
        utils.css(ban2,'width',(data.length+1)*1100)
    }

    function dianji2() {
        left2.onclick = function () {
            if(step<=0){
                step = data.length;
                utils.css(ban2, 'left', -1100 * step);
            }
            step--;
            console.log(step);
            for (let i = 0; i < lis2.length; i++) {
                // console.log(step);
                //console.log(lis2.length);
                if (step === i) {
                    lis2[i].classList.add('activ');
                } else {
                    lis2[i].classList.remove('activ');
                }
                if (step === 4) {
                    lis2[0].classList.add('activ');
                }
            }
            animate(ban2,{left:-1100 * step},350)
        };
        right2.onclick = function () {
            if(step>=data.length){
                step=0;
                utils.css(ban2, 'left', 0)
            }
            step++;
            for (let i = 0; i < lis2.length; i++) {
                // console.log(step);
                //console.log(lis2.length);
                if (step === i) {
                    lis2[i].classList.add('activ');
                } else {
                    lis2[i].classList.remove('activ');
                }
                if (step === 3) {
                    lis2[0].classList.add('activ');
                }
            }
            animate(ban2,{left:-1100*step},350)
        };
    }

    function focusClick() {
        for (let i = 0; i < lis2.length; i++) {
            lis2[i].onclick = function () {
                step = i - 1;

            };
        }
    }

    function ajaxBan3(){
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/ban3.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                data3 = JSON.parse(xhr.responseText);
                bindBan3();
            }
        };
        xhr.send();
        //console.log(data3);
    }

    function bindBan3() {
        let str= ``;
        data3.forEach(function (item) {
            str+=`<ul class="swiper-slide">
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new1}</span><span class="oldpri">￥${item.old1}</span>
                            </div>
                            <img src="${item.img1}" alt="">
                            <p>${item.p1}</p>
                            <div class="goodp">好评率${item.goodp1}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new2}</span><span class="oldpri">￥${item.old2}</span>
                            </div>
                            <img src="${item.img2}" alt="">
                            <p>${item.p2}</p>
                            <div class="goodp">好评率${item.goodp2}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new3}</span><span class="oldpri">￥${item.old3}</span>
                            </div>
                            <img src="${item.img3}" alt="">
                            <p>${item.p3}</p>
                            <div class="goodp">好评率${item.goodp3}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new4}</span><span class="oldpri">￥${item.old4}</span>
                            </div>
                            <img src="${item.img4}" alt="">
                            <p>${item.p4}</p>
                            <div class="goodp">好评率${item.goodp4}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${item.new5}</span><span class="oldpri">￥${item.old5}</span>
                            </div>
                            <img src="${item.img5}" alt="">
                            <p>${item.p5}</p>
                            <div class="goodp">好评率${item.goodp5}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                    </ul>`
        });
        str+=`<ul class="swiper-slide">
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data3[0].new1}</span><span class="oldpri">￥${data3[0].old1}</span>
                            </div>
                            <img src="${data3[0].img1}" alt="">
                            <p>${data3[0].p1}</p>
                            <div class="goodp">好评率${data3[0].goodp1}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data3[0].new2}</span><span class="oldpri">￥${data3[0].old2}</span>
                            </div>
                            <img src="${data3[0].img2}" alt="">
                            <p>${data3[0].p2}</p>
                            <div class="goodp">好评率${data3[0].goodp2}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data3[0].new3}</span><span class="oldpri">￥${data3[0].old3}</span>
                            </div>
                            <img src="${data3[0].img3}" alt="">
                            <p>${data3[0].p3}</p>
                            <div class="goodp">好评率${data3[0].goodp3}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data3[0].new4}</span><span class="oldpri">￥${data3[0].old4}</span>
                            </div>
                            <img src="${data3[0].img4}" alt="">
                            <p>${data3[0].p4}</p>
                            <div class="goodp">好评率${data3[0].goodp4}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                        <li>
                            <div class="tpri">
                                <span class="newpri">￥${data3[0].new5}</span><span class="oldpri">￥${data3[0].old5}</span>
                            </div>
                            <img src="${data3[0].img5}" alt="">
                            <p>${data3[0].p5}</p>
                            <div class="goodp">好评率${data3[0].goodp5}%</div>
                            <div class="inp">立即抢购</div>
                        </li>
                    </ul>`;
        ban3.innerHTML = str;
        utils.css(ban3,'width',(data3.length+1)*1100)
    }

    function dianji3() {
        left3.onclick = function () {
            if(step1<=0){
                step1 = data3.length;
                utils.css(ban3, 'left', -1100 * step1);
            }
            step1--;
            console.log(step1);
            for (let i = 0; i < lis3.length; i++) {
                // console.log(step);
                //console.log(lis2.length);
                if (step1 === i) {
                    lis3[i].classList.add('activ');
                } else {
                    lis3[i].classList.remove('activ');
                }
                if (step1 === 4) {
                    lis3[0].classList.add('activ');
                }
            }
            animate(ban3,{left:-1100 * step1},350)
        };
        right3.onclick = function () {
            if(step1>=data.length){
                step1=0;
                utils.css(ban3, 'left', 0)
            }
            step1++;
            for (let i = 0; i < lis3.length; i++) {
                // console.log(step);
                //console.log(lis2.length);
                if (step1 === i) {
                    lis3[i].classList.add('activ');
                } else {
                    lis3[i].classList.remove('activ');
                }
                if (step1 === 3) {
                    lis3[0].classList.add('activ');
                }
            }
            animate(ban3,{left:-1100*step1},350)
        };
    }
    
    function con2_list() {
        tab2.onclick =function () {
            conbody2.style.display = 'block';
            conbody3.style.display = 'none';
            this.classList.add('grcol');
            tab3.classList.remove('grcol');
        };
        tab3.onclick = function () {
            conbody3.style.display = 'block';
            conbody2.style.display = 'none';
            this.classList.add('grcol');
            tab2.classList.remove('grcol');
        }
    }


    return{
        init:function () {
            ajaxBan2();
            dianji2();
            focusClick();
            ajaxBan3();
            dianji3();
            con2_list();
        }
    }
})();