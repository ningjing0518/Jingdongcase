let lxg = (function () {
    let sidebar = document.getElementById('sidebar');
    let side = document.getElementById('side');
    let as = side.getElementsByTagName('div');
    let as1 = side.getElementsByTagName('div')[1];
    let ems = side.getElementsByTagName('em');
    let ewm_in = document.getElementById('ewm_in');
    let incang = document.getElementById('incang');
    let con_le = document.getElementById('con_le');
    let con_l = document.getElementById('con_l');
    let con_ri = document.getElementById('con_ri');
    let con_r = document.getElementById('con_r');
    let ewmm = document.getElementById('ewmm');
    let dlm = document.getElementById('dlm');
    let guanbi =document.getElementById('guanbi');
    let damian = document.getElementById('damian');
    let jdhy = document.getElementById('jdhy');
    let gbri1 = document.getElementById('gbri1');
    let gbri2 = document.getElementById('gbri2');
    let xhx =document.getElementById('xhx');
    let tolbar1 = document.getElementById('toolbar1');
    let tolbar2 =document.getElementById('toolbar2');

    let data = null;

    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/side.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4&&xhr.status==200){
                data = JSON.parse(xhr.responseText);
                bind()
            }
        };
        xhr.send();
    }

    function bind() {
        let str =``;
        data.forEach(function (item) {
            str+=`<div class='sidef'><a href="${item.url}" target="_blank"><i class="ceb${item.num}"></i><b></b><em>${item.con}</em></a></div>`
        });
        str+=`<div class='sidef UP'><a href="" class=""><i class="cebUp"></i><em>顶部</em></a></div>`;
        side.innerHTML = str;
        for(let i = 0;i<as.length;i++){
            if(i===0){
                as[i].classList.add('hongdian')
            }
            as[i].onclick =function () {
                if(i===0||i===2||i===5){
                    jdhy.style.display='block';
                    damian.style.display = 'block'
                }
            }
        }
    }

    function ewmMove() {
        setTimeout(()=>{
            animate(ewm_in,{left:-60},200);
            animate(incang,{opacity:1},200)
        },400);

        ewmm.onmouseenter =function () {
            animate(ewm_in,{left:-60},200);
            /* let timer =   setInterval(()=>{
             utils.css(incang,'display','block')
             },200)*/
            animate(incang,{opacity:1},200)
        };
        ewmm.onmouseleave =function () {
            animate(ewm_in,{left:0},200);
            /* clearInterval(timer);
             utils.css(incang,'display','none')*/
            animate(incang,{opacity:0},0)

        }
    }
    
    function conbs() {
        console.log(1);
        con_le.onmouseenter =function () {
            con_l.classList.add('con_red')
            con_l.style.color ='red'
        };
        con_ri.onmouseenter =function () {
            con_r.classList.add('con_red')
            con_r.style.color ='red'

        };
        con_le.onmouseleave =function () {
            con_l.classList.remove('con_red')
            con_l.style.color ='#666'
        };
        con_ri.onmouseleave =function () {
            con_r.classList.remove('con_red')
            con_r.style.color ='#666'
        }
    }
    function qieh() {
        con_le.onclick = function () {
            ewmm.style.display= 'block';
            dlm.style.display = 'none'
        };
        con_ri.onclick= function () {
            ewmm.style.display= 'none';
            dlm.style.display = 'block'
        }
    }
    function gb() {
        guanbi.onclick =function () {
            jdhy.style.display = 'none';
            damian.style.display = 'none'
        };
        xhx.onclick =function () {
            jdhy.style.display = 'block';
            damian.style.display = 'block'
        }
    }

    function toolbar1() {
        as[1].index = -1;
        as[1].onclick =function () {
           this.index *=-1;
            if(this.index>0){
               animate(sidebar,{right:270},200);
               this.style.background = '#c81623';
               ems[1].classList.add('xkno');
                tolbar1.style.zIndex = '5';
                tolbar2.style.zIndex = '4';
           }else{
               animate(sidebar,{right:0},200);
               this.style.background = '#7a6e6e';
                ems[1].classList.remove('xkno');
                this.onmouseenter =function () {
                    this.style.background = '#c81623';
                };
                }
            gbri1.onclick = function () {
                as[1].index*=-1;
                as[1].style.background = '#7a6e6e';
                animate(sidebar,{right:0},200);
           };
            gbri1.onmouseenter = function () {
                this.classList.add('zhuanq');
                this.classList.remove('zhuanqp')
            };
            gbri1.onmouseleave = function () {
                this.classList.remove('zhuanq');
                this.classList.add('zhuanqp')
            };
            gbri2.onclick = function () {
                as[1].index*=-1;
                as[1].style.background = '#7a6e6e';
                animate(sidebar,{right:0},200);
            };
            gbri2.onmouseenter = function () {
                this.classList.add('zhuanq');
                this.classList.remove('zhuanqp')
            };
            gbri2.onmouseleave = function () {
                this.classList.remove('zhuanq');
                this.classList.add('zhuanqp')
            }
        };
        as[3].onclick =function () {
            animate(sidebar,{right:270},200);
            tolbar1.style.zIndex = '4';
            tolbar2.style.zIndex = '5';
        };

    }


    return{
        init:function () {
            ajax();
            ewmMove();
            conbs();
            qieh();
            gb();
            toolbar1();
        }
    }
})();
