"use strict";
const  userdao=require("../dao/userdao");
function logincontrol(fields,res){
    let username=fields.username;
    userdao.queryByUserName(username,function(results){
        if(results.length==0){
        //   用户名不存在
            res.writeHead(200);
            res.write(JSON.stringify({desc:2}));
            res.end();
        }else{
            let result=results[0];
            if(result.password===fields.password){
                //    登录成功
                res.writeHead(200);
                res.write(JSON.stringify({userid:result.id,username:result.username,desc:0}));
                res.end()
            }else{
                //密码错误
                res.writeHead(200);
                res.write(JSON.stringify({desc:1}));
                res.end();
            }
        }
    });
}
module.exports={logincontrol};