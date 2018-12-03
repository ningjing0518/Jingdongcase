let lazyImg = (function () {
    let list_inner = document.getElementById('list_inner');
    let sk_list = document.getElementById('sk_list');
    let swiper = document.getElementById('swiper');
    let sk_item1 = document.getElementById('sk_item1');
    let sk_item2 = document.getElementById('sk_item2');
    let sk_item3 = document.getElementById('sk_item3');
    let sk_item4 = document.getElementById('sk_item4');
    let sk_item5 = document.getElementById('sk_item5');

    let MsData1 = null;
    let data1 = null;
    let data2 = null;
    let data3 = null;
    let data4 = null;
    let step = 0;
    let isClick = true;
    let left = list_inner.getElementsByTagName('a')[0];
    let right1 = list_inner.getElementsByTagName('a')[1];


    function msAjax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/ms1.json', false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                MsData1 = JSON.parse(xhr.responseText);

                bindHtml();
            }
        };
        xhr.send();
    }

    function bindHtml() {
        let Str = ``;
        MsData1.forEach(function (item, index) {
            Str += `<a class=" sk_item_lk" href="">
                                            <div class="lazyimg lazyimg_loaded sk_item_img">
                                                <img src="${item.img} " class="lazyimg_img">
                                            </div>
                                            <p class="sk_item_name">${item.title}</p>
                                            <div class="sk_item_price">
                                            <span class="mod_price sk_item_price_new">
                                            <i>¥</i><span>${item.price}</span></span>
                                                <span
                                                        class="mod_price sk_item_price_origin">
                                            <i>¥</i><span>${item.price1}</span></span>
                                            </div>
                                        </a>`
        });
        sk_item1.innerHTML = Str;
    }


    function ajax1() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/ms2.json', false);
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
            Str1 += `<a class=" sk_item_lk" href="">
                                            <div class="lazyimg lazyimg_loaded sk_item_img">
                                                <img src="${item.img} " class="lazyimg_img">
                                            </div>
                                            <p class="sk_item_name">${item.title}</p>
                                            <div class="sk_item_price">
                                            <span class="mod_price sk_item_price_new">
                                            <i>¥</i><span>${item.price}</span></span>
                                                <span
                                                        class="mod_price sk_item_price_origin">
                                            <i>¥</i><span>${item.price1}</span></span>
                                            </div>
                                        </a>`
        });
        sk_item2.innerHTML = Str1;
    }


    function ajax2() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/ms3.json', false);
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
            Str2 += `<a class=" sk_item_lk" href="">
                                            <div class="lazyimg lazyimg_loaded sk_item_img">
                                                <img src="${item.img} " class="lazyimg_img">
                                            </div>
                                            <p class="sk_item_name">${item.title}</p>
                                            <div class="sk_item_price">
                                            <span class="mod_price sk_item_price_new">
                                            <i>¥</i><span>${item.price}</span></span>
                                                <span
                                                        class="mod_price sk_item_price_origin">
                                            <i>¥</i><span>${item.price1}</span></span>
                                            </div>
                                        </a>`
        });
        sk_item3.innerHTML = Str2;
    }


    function ajax3() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/ms4.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                data3 = JSON.parse(xhr.responseText);
                bindHtml3();
            }
        };
        xhr.send();
    }

    function bindHtml3() {
        let Str3 = ``;
        data1.forEach(function (item, index) {
            Str3 += `<a class=" sk_item_lk" href="">
                                            <div class="lazyimg lazyimg_loaded sk_item_img">
                                                <img src="${item.img} " class="lazyimg_img">
                                            </div>
                                            <p class="sk_item_name">${item.title}</p>
                                            <div class="sk_item_price">
                                            <span class="mod_price sk_item_price_new">
                                            <i>¥</i><span>${item.price}</span></span>
                                                <span
                                                        class="mod_price sk_item_price_origin">
                                            <i>¥</i><span>${item.price1}</span></span>
                                            </div>
                                        </a>`
        });
        sk_item4.innerHTML = Str3;
    }

    function ajax4() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/ms5.json', false);
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
        data1.forEach(function (item, index) {
            Str4 += `<a class=" sk_item_lk" href="">
                                            <div class="lazyimg lazyimg_loaded sk_item_img">
                                                <img src="${item.img} " class="lazyimg_img">
                                            </div>
                                            <p class="sk_item_name">${item.title}</p>
                                            <div class="sk_item_price">
                                            <span class="mod_price sk_item_price_new">
                                            <i>¥</i><span>${item.price}</span></span>
                                                <span
                                                        class="mod_price sk_item_price_origin">
                                            <i>¥</i><span>${item.price1}</span></span>
                                            </div>
                                        </a>`
        });
        sk_item5.innerHTML = Str4;
    }





    return {
        init: function () {
            msAjax();
            ajax1();
            ajax2();
            ajax3();
            ajax4();
            //chnajax()
            //Click()


        }
    }
})
();
lazyImg.init();
