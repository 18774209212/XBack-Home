$(function(){
    // 初始化轮播
    $(".start-slide").click(function(){
        $("#myCarousel").carousel('cycle');
    });
    // 停止轮播
    $(".pause-slide").click(function(){
        $("#myCarousel").carousel('pause');
    });
    // 循环轮播到上一个项目
    $(".prev-slide").click(function(){
        $("#myCarousel").carousel('prev');
    });
    // 循环轮播到下一个项目
    $(".next-slide").click(function(){
        $("#myCarousel").carousel('next');
    });
    // 循环轮播到某个特定的帧
    $(".slide-one").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function(){
        $("#myCarousel").carousel(2);
    });
    $("#myCarousel").carousel({interval:2000});

//    将数据渲染到页面
//    1、博客列表
    var userid=window.localStorage.getItem("userid");
    ajaxEvent("post",{userid:userid},"/inithome",function(data){
        var json=strToJson(data);
    //    将数据取出来渲染到页面
        $(".bd-news-span>h4").each(function (index) {
            $(this).text(json[index].title);
        });
        $(".bd-news-span>p").each(function (index) {
            $(this).text(json[index].summary);
        });
        $(".item-info>a").each(function(index){
            $(this).text(json[index].title);
        });
        $(".item-info>p").each(function (index) {
            $(this).text(json[index].summary);
            // console.log(typeof (json[index].createtime));
        });
        $(".item-time .MonAndAay").each(function (index) {
            var date=new Date(json[index].createtime);
            $(this).text((date.getMonth()+1)+"-"+date.getDate());
        });
        $(".item-time .year").each(function (index) {
            var date=new Date(json[index].createtime);
            $(this).text(date.getFullYear());
        });
    });
});
