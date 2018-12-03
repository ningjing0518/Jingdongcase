var yintou = (function () {
    let yingtou = document.querySelector('#yingtou');

    function scrollFn() {
        let wTT = utils.win('scrollTop');
        let wHH = utils.win('clientHeight');
        if (wTT > wHH) {
            yingtou.style.display = 'block'
        } else {
            yingtou.style.display = 'none'
        }
    }

    return {
        init: function () {
            window.onscroll = scrollFn
        }
    }
})()
new yintou.init()