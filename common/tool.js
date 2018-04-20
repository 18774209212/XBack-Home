"use strict";
const fs=require("fs"),
    pt=require("path"),
    mysql=require("mysql");
//发送文件函数封装
function sendFile(response,filename){
    let file=fs.readFileSync(pt.join(__dirname,"../webapp",filename));
    response.writeHead("200",{
        "Content-Type": {
            ".css":"text/css",
            ".js":"text/javaScript",
            ".jpg":".jpeg"
        }
    });
    response.write(file);
    response.end();
}

// //连接数据库
// function getconnection(username,password){
//     //第二步：创建连接
//     let con=mysql.createConnection({
//         host     : 'localhost',
//         user     : 'root',
//         password : '',
//         database : 'myblog'
//     });
//     //第三步：连接数据库
//     con.connect();
//     //第四步：进行增删查改操作
//     con.query("select * from userinfo where ?",{username:username},function(err,results,fields){
//         if(err) throw err;
//         if(results!=""||results!=null){
//
//         }
//     });
// }
//暴露出去
module.exports={sendFile};