"use strict";
//第一步：引入库模块
const ht=require("http"),
        fs=require("fs"),
        pt=require("path"),
        url=require("url"),
        formidable=require("formidable");
//引入项目模块
const tool=require("./common/tool"),
       userdao=require("./dao/userdao");
//第二步：创建服务器
const server=ht.createServer(function(req,res){
    console.log("服务器启动成功！");
    //对访问进来的页面进行处理
   let path=req.url;
   path=url.parse(path,true);
//  把网站图标过滤掉
    if(path.pathname==="/favcion.ico"){
        console.log("favcion");
    }else if(path.pathname==="/loginaction"){
    //    获取前台传过来的请求参数
        let data=new formidable.IncomingForm();
        data.parse(req,function(err,fields,files){
            let username=fields.username;
            userdao.queryByUserName(username,function(result){
                if(result!=null&&result!=undefined){
                //    校验密码
                    if(){

                    }else{

                    }
                }else{
                //    用户名不存在
                }
            });
        });


    } else{
        //呈现页面
        tool.sendFile(res,path.pathname);
    }

});

//第三步：启动服务器
server.listen("8080",function(err){
    //若启动错误，报服务器错误
    if(err){
        console.log("服务器错误！！！");
    }
});
