let cd_item_hour = document.getElementById('cd_item_hour');
let cd_item_min = document.getElementById('cd_item_min');
let cd_item_second = document.getElementById('cd_item_second');
let time_hour=document.getElementById('time_hour');
let time_fen=document.getElementById('time_fen');
let time_miao=document.getElementById('time_miao');
function Cdd(time) {

    let Now = new Date().getTime();
    let target = new Date(time) - Now;

    let day = Math.floor(target / (1000 * 60 * 60 * 24));
    let hour = Math.floor(target % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    hour=hour<10?'0'+hour:hour;
    let fen = Math.floor(target % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
    fen = fen < 10 ? '0' + fen : fen;
    let miao = Math.floor(target % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
    miao = miao < 10 ? '0' + miao : miao;

    cd_item_hour.innerHTML = `${hour}`;
    cd_item_min.innerHTML = `${fen}`;
    cd_item_second.innerHTML = `${miao}`;

}
setInterval(function () {
    Cdd('2018-10-30 00:00')
}, 1000);