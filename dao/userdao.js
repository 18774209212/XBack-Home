"use strict";
const mysql=require("mysql");
const tool=require("../common/tool");
//连查询用户名密码
function queryByUserName(username,callback){
    //第三步：连接数据库
    let con=tool.getconnection();
    //第四步：进行增删查改操作
    con.query("select * from userinfo where ?",{username:username},function(err,results,fields){
        if(err) throw err;
        //由于这是一个回调函数，不能直接将results返回，因此可以通过返回一个callback的形式将结果返回出去
        callback(results);
    });
}
//查询用户信息
function queryUserInfo(userid,callback){
    //第三步：连接数据库
    let con=tool.getconnection();
    //第四步：进行增删查改操作
    con.query("select nickname,education,motto from userinfo where ?",{id:userid},function(err,results,fields){
        if(err) throw err;
        callback(results);
    });
}
module.exports={queryByUserName,queryUserInfo};