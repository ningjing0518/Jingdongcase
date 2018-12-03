let DNFguan = (function () {
    let xuan = document.getElementById('head_xuan');
    let lis = xuan.getElementsByClassName('xuanxiang');
    let xiang = document.getElementById('head_xiang');
    let uls = xiang.getElementsByClassName('yin_xian');
    let header = document.getElementById('header');
    let winH = utils.win('clientHeight');
    let kunbo = document.getElementById('kunbo_l');
    let olol = document.getElementById('olol');
    let Top = document.getElementById('homeTop');
    let button = fotter.getElementsByTagName('a');
    let embed = fotter.getElementsByTagName('embed');
    console.log(embed);
    function xhanhun() {
        for (let i = 0; i < lis.length; i++) {
           lis[i].addEventListener('mouseenter',function () {
               for (var j = 0; j < lis.length; j++) {
                   xiang.style.display = 'none';
                   animate(uls[j],{top:-150},240)
               }
                  xiang.style.display = 'block';
                  animate(uls[i],{top:0},200)
           },false);
            lis[i].addEventListener('mouseleave',function () {
                xiang.style.display = 'none';
                animate(uls[i],{top:-150},240)
            },false);
            uls[i].addEventListener('mouseenter',function () {
                xiang.style.display = 'block';
                animate(uls[i],{top:0},200)
            },false);
            uls[i].addEventListener('mouseleave',function () {
                xiang.style.display = 'none';
                animate(uls[i],{top:-150},240)
            },false)
        }
    }
    function paoma() {
        function imoy() {
            if(kunbo.scrollTop>=olol.offsetHeight){
                kunbo.scrollTop = 0;
            }else{
                kunbo.scrollTop += 3;
            }
        }
        kunbo.timer = setInterval(imoy,17);
        kunbo.onmouseenter = function () {
            clearInterval(kunbo.timer)
        };
        kunbo.onmouseleave = function () {
            kunbo.timer = setInterval(imoy,17);
        }
    }


  function homeTop() {
        window.onscroll = function () {
            let winScroll = utils.win('scrollTop');
            if(winScroll>=winH){
                animate(header,{top:0},300);
                Top.style.display = 'block'
            }else{
                animate(header,{top:-100},300);
                Top.style.display = 'none';
            }
        };

            Top.onclick = function(){
                let winScroll = utils.win('scrollTop');
                this.timer = setInterval(()=>{
                    winScroll-=100;
                    if(winScroll<=0){
                        clearInterval(this.timer);
                        utils.win('scrollTop',0);
                        return;
                    }
                    utils.win('scrollTop',winScroll);

                },17)
        }
  }
  function fgkskf() {
      fontzhi.onmouseleave = function () {
          animate(embed[0],{width:7,height:7,top:69,left:140},300)
          animate(embed[1],{width:7,height:7,top:725,left:140},300)
          animate(embed[2],{width:7,height:7,top:69,left:660},300)
          animate(embed[3],{width:7,height:7,top:725,left:660},300)
          animate(bglogo,{top:230},300)
          animate(music,{top:500},300)
      }
  }
      function buton() {
          for (let i = 0; i < button.length; i++) {
              button[i].onmouseenter = function () {
                 if(button[i]===button[0]){
                    animate(embed[0],{width:400,height:240,left:200,top:300},300)
                     animate(bglogo,{top:-200},300)
                     animate(music,{top:900},300)
                 }else{
                     animate(embed[0],{width:7,height:7,top:69,left:166},300)
                 }
                  if(button[i]===button[1]){
                      animate(embed[1],{width:400,height:240,left:200,top:300},300)
                      animate(bglogo,{top:-200},300)
                      animate(music,{top:900},300)
                  }else{
                      animate(embed[1],{width:7,height:7,top:725,left:166},300)
                  }
                  if(button[i]===button[2]){
                      animate(embed[2],{width:400,height:240,left:200,top:300},300)
                      animate(bglogo,{top:-200},300)
                      animate(music,{top:900},300)
                  }else{
                      animate(embed[2],{width:7,height:7,top:69,left:630},300)
                  }
                  if(button[i]===button[3]){
                      animate(embed[3],{width:400,height:240,left:200,top:300},300)
                      animate(bglogo,{top:-200},300)
                      animate(music,{top:900},300)
                  }else{
                      animate(embed[3],{width:7,height:7,top:725,left:630},300)
                  }
              }
          }
      }
    return{
        init:function () {
            xhanhun();
            paoma();
            homeTop();
            fgkskf();
            buton();
        }
    }
})();
DNFguan.init();