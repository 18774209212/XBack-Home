$(function(){
    //    将用户信息、博客列表渲染到页面
    var userid=window.localStorage.getItem("userid");
    ajaxEvent("post",{userid:userid},"/initUserInfo",function(data){
        var json=strToJson(data);
        $("#nickname").text(json.nickname);
        $("#education").text(json.education);
        $("#motto").text(json.motto);
    });
//    将博客分类渲染到页面
    ajaxEvent("post",{userid:userid},"/Catagory",function(data){
        var json=strToJson(data);
        for(var i=0;i<json.length;i++){
            var item=$("<li><a href=\"#\"><i class=\"icon-check\"></i>"+json[i].categoryname+"</a></li>");
            $("#category").append(item);
        }
    });
//    按时间顺序将博客列表渲染到页面
    ajaxEvent("post",{userid:userid},"/inithome",function(data){
        var json=strToJson(data);
        var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        //    将数据取出来渲染到页面
        $(".desc .date").each(function(index){
            if(index>3){
                return;
            }else{
                var date=new Date(json[index].createtime);
                var mon=month[date.getMonth()];
                var day=date.getDate();
                var year=date.getFullYear();
                $(this).text(mon+"."+day+"."+year);
            }
        });
        $(".desc>h3").each(function(index){
            if(index>3){
                return;
            }else{
                $(this).text(json[index].title);
            }
        });
    //    渲染博客列表

        for(var i=0;i<6;i++){
            var bloglist=" <li>\n" +
                "                                            <div class=\"row\">\n" +
                "                                                <h3>"+json[i].title+"</h3>\n" +
            "                                            </div>\n" +
            "                                            <div class=\"row\">\n" +
            "                                                <div class=\"col-md-4 col-sm-12\">\n" +
            "                                                    <img src=\"image/article"+(i+1)+".jpg\"/>\n" +
            "                                                </div>\n" +
            "                                                <div class=\"col-md-8 col-sm-12\">\n" +
            "                                                    <p> "+json[i].content+"\n" +
            "                                                    </p>\n" +
            "                                                    <button type=\"button\" class=\"btn btn-info\">阅读全文</button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                            <div class=\"row\">\n" +
            "                                                <span id=\"time\">time:"+json[i].createtime+"</span>\n" +
            "                                                <span id=\"classify\">classify:"+json[i].categoryname+"</span>\n" +
                "                                            <span id=\"pageview\">pageview:"+json[i].pageview+"</span>\n" +
            "                                            </div>\n" +
            "                                        </li>";
            $(".item>ul").append(bloglist);
        }

    });
//    按浏览量将博客列表渲染到页面并进行分页

});