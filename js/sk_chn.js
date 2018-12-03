var sk_chn = (function () {
    let sk_swiper_chn = document.getElementById('sk_swiper_chn');
    let chn_data = null;
    function chnajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data/sk_chn.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                chn_data = JSON.parse(xhr.responseText);
                chnBindHtml();
            }
        };
        xhr.send();
        console.log(chn_data);
    }

    function chnBindHtml() {
        var chn1 = ``;
        chn_data.forEach(function (item, index) {
            chn1 += `<a href="" class="sk_a swiper-slide">
                                    <img src="${item.img}" alt="" class="sk_img">
                                </a>`
        });
        sk_swiper_chn.innerHTML = chn1;
        /*utils.css(sk_swiper_chn, 'width', 180 * (chn_data.length))*/
    }
    return {
        init: function () {
            chnajax();
            //aoto();
        }
    }
})();
sk_chn.init();
