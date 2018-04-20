"use strict";
const mysql=require("mysql");
//连查询用户名密码
function queryByUserName(username,callback){
    //第二步：创建连接
    let con=mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'myblog'
    });
    //第三步：连接数据库
    con.connect();
    //第四步：进行增删查改操作
    con.query("select * from userinfo where ?",{username:username},function(err,results,fields){
        if(err) throw err;
        //由于这是一个回调函数，不能直接将results返回，因此可以通过返回一个callback的形式将结果返回出去
        callback(results);
    });
}
module.exports={queryByUserName};