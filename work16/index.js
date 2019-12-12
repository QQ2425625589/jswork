function $(id) {
    return document.getElementById(id);
}
$('smallBox').onmouseover = function () {
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
};
$('smallBox').onmouseout = function () {
    $('mask').style.display = 'none';
    $('bigBox').style.display = 'none';
};
$('smallBox').onmousemove = function (event) {
    var event = event || window.event;

    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;

    var boxX = pageX - $('box').offsetLeft;
    var boxY = pageY - $('box').offsetTop;

    
   
}