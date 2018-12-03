let content = (function () {
    let content = document.getElementById('content');
    let data = null;
    let dete = null;
    let cur = null;
    let li = wenzi.getElementsByTagName('li');
    let lis = liebiao.getElementsByClassName('hfdjdas');
    let uls = xaudkx.getElementsByTagName('li');
    let div = xuanxiang.getElementsByClassName('suibain');
    let sux = yibai.getElementsByTagName('li');
    let inpus = chufa.getElementsByClassName('laheks');
    let onclick = xmayfsf.getElementsByTagName('a');
    let kik = lwenzi.getElementsByTagName('a');
    let gfhdj = jipiao.getElementsByClassName('xjadhs');
    let value = null;
    let knls = fhsncha.getElementsByTagName('a');
    let kmlfodh = jiudian.getElementsByClassName('kmlfodh');
    let jlis = jwenzi.getElementsByTagName('a');
    let komlmode = user_inner.getElementsByClassName('komlmode');
    let lliis = xjwudfk.getElementsByTagName('li');
    let gfdg = null
    function move1() {
        cuxiao.onmouseenter = function () {
            animate(move,{left:0},100);
            moustone.style.display = 'none';
            content.style.display = 'block'
        };
        gonggao.onmouseenter = function () {
            animate(move,{left:55},100);
            content.style.display = 'none';
            moustone.style.display = 'block'
        }
    }
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/proud1.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState===4&&xhr.status===200){
                data = JSON.parse(xhr.responseText);
                bindHtml()
            }
        };
        xhr.send();
    }
    function bindHtml() {
        let str = ``;
        data.forEach(function (item) {
            str +=`
            <ul>
            <a href="javascript:;">
            <li>${item.con}</li>
            </a>
            </ul>
            `
        });
        content.innerHTML = str
    }
    function ajax1() {
        let xhr = new XMLHttpRequest();
        xhr.open('get','data/proud2.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState===4&&xhr.status===200){
                dete = JSON.parse(xhr.responseText)
            }
        };
        xhr.send();
    }
    function bindHtml1() {
        let str = ``;
        dete.forEach(function (item) {
            str +=`
            <ul>
            <a href="javascript:;">
            <li>${item.con}</li>
            </a>
            </ul>
            `
        });
        moustone.innerHTML = str

    }
    function shuxna() {
        topout.onclick = function () {
            topout.timer = setInterval(function () {
                animate(fly,{bottom:-300},240);
                animate(fay,{top:-300},240);
                animate(fey,{top:-300},240);
                animate(liebiao,{top:-174},240);
                button00.style.display = 'block';
                animate(wenzi,{top:0},240);
                animate(chongzhi,{top:0},240);
                animate(taocan,{top:0},240);
                animate(xmahsl,{top:0},240);
                animate(jiudian,{top:-150},240);
                animate(youxi,{top:-150},240)
                animate(box,{top:305,height:5,width:5,left:88},240)
            },360);
            xksuan(gfdg)
        };
        clearInterval(topout.timer);
        button00.onclick = function () {
            button00.style.display = 'none';
            clearInterval(topout.timer);
            animate(liebiao,{top:-300},240);
            animate(fly,{bottom:0},240);
            animate(fay,{top:0},240);
            animate(fey,{top:0},240);
            animate(wenzi,{top:-300},240);
            animate(taocan,{top:-300},240);
            animate(chongzhi,{top:300},240);
            animate(xmahsl,{top:300},240);
            animate(jiudian,{top:300},240);
            animate(youxi,{top:300},240);
            animate(box,{width:13,height:20,top:310,left:84},240)
            fotter.style.display = 'none';
            jipiao.style.display = 'none';
            jiudian.style.display = 'none';
            youxi.style.display = 'none'
        }
    }

    function asdij() {
        sanjiao.onclick = function () {
            yibai.style.display = 'block';
        };
        yibai.onmouseenter = function () {
            yibai.style.display = 'block'
        };
        yibai.onmouseleave = function () {
            yibai.style.display = 'none'
        }
    }
    function jasda() {
        for (let i = 0; i < li.length; i++) {
            let cur = null;
            li[i].onmouseenter = function () {
                for (var j = 0; j < li.length; j++) {
                    li[j].style.color = 'black'
                }
                if(cur!=='huafei'){
                    snxuw.value = ''
                }
                li[i].style.color = 'red';
                cur = this.getAttribute('attrName');
                xisdsk.call(this,cur);
            }
        }
    }
    function xisdsk(cur) {
        if(cur==='huafei'){
            chongzhi.style.display = 'block';
            liuliang.style.display = 'none';
            taocan.style.display = 'none'
        }else if(cur==='liuliang'){
            chongzhi.style.display = 'none';
            liuliang.style.display = 'block';
            taocan.style.display = 'none'
        }else{
            chongzhi.style.display = 'none';
            liuliang.style.display = 'none';
            taocan.style.display = 'block'
        }
    }

    function cleartou() {
        for (let i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onmouseenter = function () {
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.color = 'black';
                    komlmode[j].style.display = 'none'
                }
                lis[i].style.color = 'red';

                komlmode[this.index].style.display = 'block'
                gfdg = komlmode[this.index];
                xksuan(gfdg)
            }
        }
    }


    function xksuan(gfdg) {
        for (var i = 0; i < komlmode.length; i++) {
            if(gfdg===komlmode[i]){
                komlmode[i].style.display = 'block'
            }
        }
    }
    function xuanxyf() {
        for (var i = 0; i < uls.length; i++) {
            uls[i].index = i;
            uls[i].onclick = function () {
                for (var j = 0; j < uls.length; j++) {
                    div[0].style.display = 'none';
                    div[1].style.display = 'none';
                }
                console.log(div[this.index]);
                div[this.index].style.display = 'block'
            }
        }
    }
    function xhaxkasd() {
        for (let i = 0; i < sux.length; i++) {
            sux[i].onclick = function () {
                snxuw.value = sux[i].textContent;
                yibai.style.display = 'none';
            }
        }
    }
    function xmahdf() {
        for (let i = 0; i < inpus.length; i++) {
            inpus[i].onclick = function () {
                xuanxiang.style.display = 'block';
                let kmo = this.getAttribute('cket');
                xasdchs(kmo)
            }
        }
        xuanxiang.onmouseleave = function () {
            xuanxiang.style.display = 'none';
        }
    }
    function xasdchs(kmo) {
        for (let i = 0; i < onclick.length; i++) {
            onclick[i].onclick = function () {
                xuanxiang.style.display = 'none';
                let nhu=onclick[i].textContent;
                if(kmo==='kmhu'){
                    inpus[0].value=nhu
                }else{
                    inpus[1].value=nhu
                }
            }
        }
    }
    function fgnvdbhsd() {
        for (let i = 0; i < kik.length; i++) {
            kik[i].index = i;
            kik[i].onmouseenter = function () {
                for (var j = 0; j < kik.length; j++) {
                    kik[j].style.color = 'black';
                    gfhdj[j].style.display = 'none'
                }
                this.style.color = 'red';
                gfhdj[this.index].style.display = 'block'
            }
        }
    }
    function dsfkjhsdf() {
        for (let i = 0; i < knls.length; i++) {
            let cur = knls[i].index = i;
            knls[i].onmouseenter = function () {
                for (var j = 0; j < knls.length; j++) {
                    knls[j].style.color = 'black';
                }
                knls[i].style.color = 'red';
                if(cur===0){
                 animate(kmlfodh[0],{left:0},240);
                 animate(kmlfodh[1],{left:188},240)
                }else if(cur===1){
                    animate(kmlfodh[0],{left:-200},240);
                    animate(kmlfodh[1],{left:0},240)
                }

            }

        }
    }
    function fbdsuf() {
        for (let i = 0; i < jlis.length; i++) {
            jlis[i].index = i;
            jlis[i].onmouseenter = function () {
                for (var j = 0; j < jlis.length; j++) {
                    jlis[j].style.color = 'black'
                }
                jlis[i].style.color = 'red';
                animate(gdffkfg,{left:-165*jlis[i].index},200)
            }
        }
    }






    return {
        init:function () {
            ajax();
            bindHtml();
            ajax1();
            bindHtml1();
            move1();
            shuxna(value);
            asdij();
            jasda();
            cleartou();
            xuanxyf();
            xhaxkasd();
            xmahdf();
            xasdchs();
            fgnvdbhsd()
            dsfkjhsdf();
            fbdsuf();
        }
    }





})();

content.init()


























