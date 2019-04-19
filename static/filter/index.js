/**
 * 时间戳处理
 * fmt 时间格式 yyyy-MM-dd hh:mm:ss
 * date 传入时间戳
 */
function add0(m){return m<10?'0'+m:m }
const dateFtt = function(date) {
    let time = new Date(date * 1000);
    let y = time.getFullYear();
    let m = time.getMonth()+1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d);
}

export default {
    dateFtt
}