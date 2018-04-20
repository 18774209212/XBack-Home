"use strict";
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
