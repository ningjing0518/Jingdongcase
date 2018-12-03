let Box = (function () {
    var tab = document.getElementById('tab');
    var lis = tab.getElementsByTagName('li');
    var contents = tab.getElementsByTagName('div');
    let top_item1 = document.getElementById('top_item1');
    let top_item2 = document.getElementById('top_item2');
    let top_item3 = document.getElementById('top_item3');
    let top_item4 = document.getElementById('top_item4');
    let top_item5 = document.getElementById('top_item5');
    let top_item6 = document.getElementById('top_item6');
    let top_item7 = document.getElementById('top_item7');
    let top_item8 = document.getElementById('top_item8');
    let top_item9 = document.getElementById('top_item9');
    let top_item10 = document.getElementById('top_item10');
    let data = null;
    let data1 = null;
    let data2 = null;
    let data3 = null;
    let data4 = null;
    let data5 = null;
    let data6 = null;
    let data7 = null;
    let data8 = null;
    let data9 = null;
    let last_lb = document.getElementById('last_lb');
    let last_lb1 = document.getElementById('last_lb1');
    let lastData = null;
    let lastData1 = null;


    let mime_lb = document.getElementById('mime_lb');
    let mimeData = null;
    let chosen_ul=document.getElementById('chosen_ul');
    let chosenDate = null;



    //第一次
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/sj1.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data = JSON.parse(xhr.responseText);

                bindHtml();
            }
        };
        xhr.send();

    }

    function bindHtml() {
        let Str = ``;
        data.forEach(function (item, index) {
            Str += `
             <a class="top_item_lk" href="">
         <img src="${item.img}" class="top_item_img">
           <span class="top_item_rank top_item_rank_1">${item.price}</span>
           <span class="top_item_name">${item.title}</span>
                           </a>`
        });
        top_item1.innerHTML = Str;
    }

    //第二次
    function ajax1() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/sj2.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data1 = JSON.parse(xhr.responseText);

                bindHtml1();
            }
        };
        xhr.send();
    }

    function bindHtml1() {
        let Str1 = ``;
        data1.forEach(function (item, index) {
            Str1 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item2.innerHTML = Str1;
    }

    //第三次
    function ajax2() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/yd1.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data2 = JSON.parse(xhr.responseText);
                bindHtml2();
            }
        };
        xhr.send();
    }

    function bindHtml2() {
        let Str2 = ``;
        data2.forEach(function (item, index) {
            Str2 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item3.innerHTML = Str2;
    }

    //第四次
    function ajax3() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/yd2.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data3 = JSON.parse(xhr.responseText);
                bindHtml3();
            }
        }
        xhr.send();
    }

    function bindHtml3() {
        let Str3 = ``;
        data3.forEach(function (item, index) {
            Str3 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item4.innerHTML = Str3;
    }

    //第五次
    function ajax4() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/bj1.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data4 = JSON.parse(xhr.responseText);
                bindHtml4();
            }
        };
        xhr.send();
    }

    function bindHtml4() {
        let Str4 = ``;
        data4.forEach(function (item, index) {
            Str4 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item5.innerHTML = Str4;
    }

    //第六次
    function ajax5() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/bj2.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data5 = JSON.parse(xhr.responseText);
                bindHtml5();
            }
        };
        xhr.send();
    }

    function bindHtml5() {
        let Str5 = ``;
        data5.forEach(function (item, index) {
            Str5 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item6.innerHTML = Str5;
    }

    //第七次
    function ajax6() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/hx1.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data6 = JSON.parse(xhr.responseText);
                bindHtml6();
            }
        };
        xhr.send();
    }

    function bindHtml6() {
        let Str6 = ``;
        data6.forEach(function (item, index) {
            Str6 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item7.innerHTML = Str6;
    }

    //第八次
    function ajax7() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/hx2.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data7 = JSON.parse(xhr.responseText);
                bindHtml7();
            }
        };
        xhr.send();
    }

    function bindHtml7() {
        let Str7 = ``;
        data7.forEach(function (item, index) {
            Str7 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item8.innerHTML = Str7;
    }

    //第九次
    function ajax8() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/cf1.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data8 = JSON.parse(xhr.responseText);
                bindHtml8();
            }
        };
        xhr.send();
    }

    function bindHtml8() {
        let Str8 = ``;
        data8.forEach(function (item, index) {
            Str8 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item9.innerHTML = Str8;
    }

    //第十次
    function ajax9() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/cf2.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data9 = JSON.parse(xhr.responseText);
                bindHtml9();
            }
        };
        xhr.send();
    }

    function bindHtml9() {
        let Str9 = ``;
        data9.forEach(function (item, index) {
            Str9 += `<a class="top_item_lk" href="">
      <img src="${item.img}" class="top_item_img">
  <span class="top_item_rank top_item_rank_1">${item.price}</span>
  <span class="top_item_name">${item.title}</span>
       </a>`
        });
        top_item10.innerHTML = Str9;
    }

    function xxk() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onmousemove = function () {
                for (var j = 0; j < lis.length; j++) {
                    lis[j].className = '';
                    contents[j].className = '';
                }
                this.className = 'active';
                contents[this.index].className = ' active'
            }
        }
    }

    /*last*/
    function lastAjax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/last.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                lastData = JSON.parse(xhr.responseText);

                lastBindHtml();
            }
        };
        xhr.send();
        console.log(lastData);
    }

    function lastBindHtml() {
        let lastStr = ``;
        lastData.forEach(function (item, index) {
            lastStr += `
             <a href="" class="last_a">
                                        <img src="${item.img}" alt="" class="last_img">

                                        <div class="last_r">
                                            <div class="last_text">${item.text}</div>
                                        </div>
                                        <div class="last_c">
                                            <div class="last_c_c">
                                                <i class="last_i">￥</i>
                                                <span class="last_span">${item.price}</span>
                                            </div>
                                            <h3 class="last_h3">${item.title}</h3>
                                            <p class="last_p">${item.title1}</p>
                                        </div>
                                    </a>`
        });
        last_lb.innerHTML = lastStr;
    }

    //第二次
    function lastAjax1() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/last1.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                lastData1 = JSON.parse(xhr.responseText);

                lastBindHtml1();
            }
        };
        xhr.send();
        console.log(lastData);
    }

    function lastBindHtml1() {
        let lastStr1 = ``;
        lastData1.forEach(function (item, index) {
            lastStr1 += `
             <a href="" class="last_a">
                                        <img src="${item.img}" alt="" class="last_img">

                                        <div class="last_r">
                                            <div class="last_text">${item.text}</div>
                                        </div>
                                        <div class="last_c">
                                            <div class="last_c_c">
                                                <i class="last_i">￥</i>
                                                <span class="last_span">${item.price}</span>
                                            </div>
                                            <h3 class="last_h3">${item.title}</h3>
                                            <p class="last_p">${item.title1}</p>
                                        </div>
                                    </a>`
        });
        last_lb1.innerHTML = lastStr1;
    }

    /*觅me*/
    function mimeajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/datame.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                mimeData = JSON.parse(xhr.responseText);

                mimeBindHtml();
            }
        };
        xhr.send();
        console.log(mimeData);
    }

    function mimeBindHtml() {
        let mimeStr = ``;
        mimeData.forEach(function (item) {
            mimeStr += `<a href="" class="mime_a swiper-slide" >
                                    <img src="${item.img}" alt="" class="mime_img">
                                    <h3 class="mime_h3">${item.p1}</h3>
                                    <p class="mime_p">${item.p2}</p>
                                </a>`
        });
        mime_lb.innerHTML = mimeStr;
        utils.css(mime_lb, 'width', 350 * (mimeData.length));
    }

    /*发现好货*/
    function chosenAjax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/good.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                chosenDate = JSON.parse(xhr.responseText);

                goodBindHtml();
            }
        };
        xhr.send();
        console.log(chosenDate);
    }
    function goodBindHtml() {
        let goodStr = ``;
        chosenDate.forEach(function (item) {
            goodStr += `<li class="chosen_li">
                                    <a href="" class="chosen_a">
                                        <img src="${item.img}" class="chosen_img">
                                        <h3 class="chosen_h3">${item.p1}</h3>
                                        <p class="chosen_p">${item.p2}</p>
                                    </a>
                                </li>`
        });
        chosen_ul.innerHTML = goodStr;
        //utils.css(mime_lb, 'width', 350 * (mimeData.length));
    }



    return {
        init: function () {
            ajax();
            ajax1();
            ajax2();
            ajax3();
            ajax4();
            ajax5();
            ajax6();
            ajax7();
            ajax8();
            ajax9();
            xxk();
            lastAjax();
            lastAjax1();

            mimeajax();
            chosenAjax();

        }
    }
})();
new Box.init();