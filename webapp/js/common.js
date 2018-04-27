function strToJson(str){
        var json = (new Function("return " + str))();
        return json;
    }
function paramToJson(str){
    let newstr = str;
    while(newstr.indexOf("=")>0){
        newstr = newstr.replace("=",":\"");
    }
    while(newstr.indexOf("&")>0){
        newstr = newstr.replace("&","\",")
    }
    var stringObj= "{" +newstr + "\"}";
    return stringObj;
}
function ajaxEvent(method,data,url,callback) {
    $.ajax({
        type:method,
        data:data,
        url:url,
        async:false,
        success:function(data){
            callback(data);
        },
        error:function(){}
    });
}
//加载头部
function ajaxloadHead(local){
    htmlobj=$.ajax({url:local,async:false});
    $(".page").prepend(htmlobj.responseText);
}
//加载尾部
function ajaxloadFooot(local){
    htmlobj=$.ajax({url:local,async:false});
    $(".page").append(htmlobj.responseText);
}