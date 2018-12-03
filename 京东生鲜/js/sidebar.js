

let side = (function () {

    let sideT = document.getElementById('sidebar_top');
    let sideB = document.getElementById('sidebar_bot');
    let dz = document.getElementById('dz');
    let lis = sideT.getElementsByTagName('li');
    let lis2 = sideB.getElementsByTagName('li');


    function  clickSkip() {
        console.log(document.documentElement.scrollTop);
        window.onscroll=function () {
            let winS = utils.win('scrollTop');
            if (winS >= 200) {
                animate(sideB, {opacity: 1}, 370);
                animate(sideT, {opacity: 1}, 370);
                utils.css(dz, 'display', 'none');
            } else {
                animate(sideB, {opacity: 0}, 370);
                animate(sideT, {opacity: 0}, 370);
                utils.css(dz, 'display', 'block')
            }

            let winT = utils.win('scrollTop');
            console.log(winT);
            /*if (winT < 1200) {
                $('#sidebar_top li').eq(0).addClass('active').siblings().removeClass('active');

            } else if (1200 < winT < 2600) {
                $('#sidebar_top li').eq(1).addClass('active').siblings().removeClass('active');
            }
            if (2600 < winT < 3430) {
                $('#sidebar_top li').eq(2).addClass('active').siblings().removeClass('active');
             }else if (3430 < winT < 5562) {
                $('#sidebar_top li').eq(3).addClass('active').siblings().removeClass('active');
            }*/



            $('#sidebar_top li').on('click',function () {
                $(this).addClass('active').siblings().removeClass('active')
            });



            lis2[2].onclick=function () {
                let winS = utils.win('scrollTop');
                this.timerb = setInterval(()=>{
                    winS-=700;
                    if(winS<=0){
                        clearInterval(this.timerb);
                        utils.win('scrollTop',0);
                    }
                    utils.win('scrollTop',winS);
                },45)
            }
        };
    }



    return{
        init:function () {
            clickSkip();
        }
    }
})();
