let lxq1 = (function () {
    let con3Top = document.getElementById('con3Top');
    let contdata3 = null;
    let Box1data = null;
    let Box1 = document.getElementById('con4_Box1');
    let Box2data = null;
    let Box2 = document.getElementById('con4_Box2');
    let Box3data = null;
    let Box3 = document.getElementById('con4_Box3');
    let Box4data = null;
    let Box4 = document.getElementById('con4_Box4');
    let step1 = 0;
    let step2 = 0;
    let ri1 = document.getElementById('ri1');
    let le1 = document.getElementById('le1');
    let ri2 = document.getElementById('ri2');
    let le2 = document.getElementById('le2');
    let head = document.getElementById('head');
    let tabs = head.getElementsByClassName('tab_con');
    let it0 = document.getElementById('it1');
    let it1 = document.getElementById('it2');

    //con3
    function contAjax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/con3Top.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                contdata3 = JSON.parse(xhr.responseText);
                contBind();
            }
        };
        xhr.send();
        console.log(contdata3);
    }

    function contBind() {
        let str = ``;
        contdata3.forEach(function (item) {
            str+=  `<a href="javascript:;">
                        <div class="cont_pic"><img src="${item.img}" alt=""></div>
                        <div class="cont_pri">
                            <p class="pri_p1">${item.price}</p>
                            <p class="pri_p2">${item.prig}</p>
                        </div>
                        <div class="cont_info">
                            <p class="cont_prom">${item.prom}</p>
                            <i class="cont_line"></i>
                            <p class="cont_name">${item.name}</p>
                            <p class="cont_bot">${item.bot}</p>
                        </div>
                    </a>`
        });
        con3Top.innerHTML = str;
    }
    //con4

    function ajaxBox1() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/con4B1.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                Box1data = JSON.parse(xhr.responseText);
                bindBox1()
            }
        };
        xhr.send();
        console.log(Box1data);
    }

    function bindBox1() {
        let str = ``;
        Box1data.forEach(function (item) {
            str+=  `<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${item.img}" alt="">
                                                    <p class="con4Bc">${item.con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${item.price}</p>
                                                    <p class="good_good">好评率${item.goodp}</p>
                                                </div>
                                            </div>
                                        </div>`
        });
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box1data[0].img}" alt="">
                                                    <p class="con4Bc">${Box1data[0].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box1data[0].price}</p>
                                                    <p class="good_good">好评率${Box1data[0].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box1data[1].img}" alt="">
                                                    <p class="con4Bc">${Box1data[1].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box1data[1].price}</p>
                                                    <p class="good_good">好评率${Box1data[1].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box1data[2].img}" alt="">
                                                    <p class="con4Bc">${Box1data[2].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box1data[2].price}</p>
                                                    <p class="good_good">好评率${Box1data[2].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box1data[3].img}" alt="">
                                                    <p class="con4Bc">${Box1data[3].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box1data[3].price}</p>
                                                    <p class="good_good">好评率${Box1data[3].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        Box1.innerHTML = str;
        utils.css(Box1,'width',790*(((Box1data.length)/4)+1));

    }

    function dianji1() {
        le1.onclick = function () {
            if(step1<=0){
                step1 = ((Box1data.length)/4);
                utils.css(Box1,'left',-790*step1)
            }
            step1--;
            animate(Box1,{left:-790*step1},350)
        };
        ri1.onclick = function () {
            if(step1>=((Box1data.length)/4)){
                step1 = 0;
                utils.css(Box1,'left',0)
            }
            step1++;
            animate(Box1,{left:-790*step1},350)
        }
    }

    function qhuan() {
        tabs[0].onclick =function () {
            this.classList.add('active');
            tabs[1].classList.remove('active');
            tabs[2].classList.remove('active');
            tabs[3].classList.remove('active');
            it0.style.display = 'block';
            it1.style.display = 'none';

        };
        tabs[1].onclick =function () {
            this.classList.add('active');
            tabs[0].classList.remove('active');
            tabs[2].classList.remove('active');
            tabs[3].classList.remove('active');
            it1.style.display = 'block';
            it0.style.display = 'none';
        };
        tabs[2].onclick =function () {
            this.classList.add('active');
            tabs[1].classList.remove('active');
            tabs[0].classList.remove('active');
            tabs[3].classList.remove('active');
        };
        tabs[3].onclick =function () {
            this.classList.add('active');
            tabs[1].classList.remove('active');
            tabs[2].classList.remove('active');
            tabs[0].classList.remove('active');
        }
    }

    function ajaxBox2() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/con4B2.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                Box2data = JSON.parse(xhr.responseText);
                bindBox();
            }
        };
        xhr.send();
        console.log(Box2data);
    }

    function bindBox () {
        let str = ``;
        Box2data.forEach(function (item) {
            str+=  `<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${item.img}" alt="">
                                                    <p class="con4Bc">${item.con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${item.price}</p>
                                                    <p class="good_good">好评率${item.goodp}</p>
                                                </div>
                                            </div>
                                        </div>`
        });
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box2data[0].img}" alt="">
                                                    <p class="con4Bc">${Box2data[0].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box2data[0].price}</p>
                                                    <p class="good_good">好评率${Box2data[0].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box2data[1].img}" alt="">
                                                    <p class="con4Bc">${Box2data[1].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box2data[1].price}</p>
                                                    <p class="good_good">好评率${Box2data[1].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box2data[2].img}" alt="">
                                                    <p class="con4Bc">${Box2data[2].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box2data[2].price}</p>
                                                    <p class="good_good">好评率${Box2data[2].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        str+=`<div class="boxit">
                                            <div class="boxinn">
                                                <a href="javascript:;">
                                                    <img src="${Box2data[3].img}" alt="">
                                                    <p class="con4Bc">${Box2data[3].con}</p>
                                                </a>
                                                <div class="good_it">
                                                    <p class="good_pri">￥${Box2data[3].price}</p>
                                                    <p class="good_good">好评率${Box2data[3].goodp}</p>
                                                </div>
                                            </div>
                                        </div>`;
        Box2.innerHTML = str;
        utils.css(Box2,'width',790*(((Box2data.length)/4)+1));
    }

    function dianji2() {
        le2.onclick = function () {
            if(step2<=0){
                step2 = ((Box2data.length)/4);
                utils.css(Box2,'left',-790*step2)
            }
            step2--;
            animate(Box2,{left:-790*step2},350)
        };
        ri2.onclick = function () {
            if(step2>=((Box2data.length)/4)){
                step2 = 0;
                utils.css(Box2,'left',0)
            }
            step2++;
            animate(Box2,{left:-790*step2},350)
        }
    }


    return{
        init:function () {
            contAjax();
            ajaxBox1();
            ajaxBox2();
            dianji1();
            dianji2()
            qhuan();
        }
    }
})();
