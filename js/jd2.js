/**
 * Created by lenovo on 2018/9/18.
 */
var left = document.getElementById('left');
var lis = left.getElementsByTagName('li');
var contents = left.getElementsByTagName('div')

for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function () {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
            contents[j].className = '';
        }
        this.className = 'active';
        contents[this.index].className = 'active'
    }
    lis[i].onmouseout = function () {
        contents[this.index].className = '';
        this.className = '';
    }
}


var gy = new Swiper('.middle_swip.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',//vertical
    loop: true,
    // 如果需要分页器



    pagination: '.midd.swiper-pagination',
    paginationType: 'custom',

    autoplay: 2000,
    effect: 'fade',
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    //effect:'cube',
    // 如果需要前进后退按钮


    nextButton: '.but_r',
    prevButton: '.but_l',

    //  });

    paginationCustomRender: function (swiper, current, total) {
        var cf_lb = "";
        for (var i = 0; i < total; i++) {
            //判断哪个分页器此刻应该被激活
            if (i == (current - 1)) {
                cf_lb += '<dd class="swiper-pagination-customs-g swiper-pagination-customs-g-active"></dd>';
            } else {
                cf_lb += '<dd class="swiper-pagination-customs-g"></dd>';
            }
        }
        return cf_lb;
    }
});


$(".midd.swiper-pagination").on("mousemove", "dd", function () {
    var index = $(this).index();
    gy.slideTo(index + 1);

})




