$(function(){
    var urlParam = decodeURI(window.location.href.split("?")[1]);
    var blogId=urlParam.split("=")[1];
    readArticle(blogId);
});
function readArticle(blogId){
    ajaxEvent("post",{blogId:blogId},"/readMore",function(data){
        var json=strToJson(data);
    //    将数据渲染到页面
        $(".article-cont .article-title>h3").text(json.title);
        $(".article-cont .article-info span:nth-of-type(2)").text(json.createtime);
        $(".article-cont .article-info span:nth-of-type(4)").text(json.pageview);
        $(".article-cont .article-text p:nth-of-type(1)").text(json.content);
    });
}