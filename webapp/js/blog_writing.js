$(function(){
    ajaxloadHead('head.html');
    ajaxloadFooot('foot.html');
});
//不兼容火狐，谷歌可以
// function loadHeader(){
//     var link = document.querySelector('link[rel="import"]');
//     console.log(link);
//     var c = link.import;
//     // 从 warning.html 的文档中获取 DOM。
//     var el = c.querySelector('header');
//     $(".page").prepend(el.cloneNode(true));
// }
// function loadFooter(){
//     var link = document.querySelector('link[rel="import"]');
//     var c = link.import;
//     // 从 warning.html 的文档中获取 DOM。
//     var el = c.querySelector('footer');
//     $(".page").append(el.cloneNode(true));
// }