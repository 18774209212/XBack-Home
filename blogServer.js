"use strict";
//第一步：引入库模块
const ht=require("http"),
        fs=require("fs"),
        pt=require("path"),
        url=require("url"),
        formidable=require("formidable");
//引入项目模块
const tool=require("./common/tool"),
        userctl=require("./control/usercontrol"),
        blogctl=require("./control/blogcontrol");
//第二步：创建服务器
const server=ht.createServer(function(req,res){
    console.log("服务器启动成功！");
    //对访问进来的页面进行处理
   let path=req.url;
   path=url.parse(path,true);
//  把网站图标过滤掉
    if(path.pathname==="/favicon.ico"){
        let file=fs.readFileSync(pt.join(__dirname,"./webapp/image","logo.jpg"));
        res.writeHead("200",{
            "Content-Type": {
                ".css":"text/css",
                ".js":"text/javaScript",
                ".jpg":".jpeg"
            }
        });
        res.write(file);
        res.end();
    }else if(path.pathname==="/loginaction"){
    //    获取前台传过来的请求参数
        let data=new formidable.IncomingForm();
        data.parse(req,function(err,fields,files){
            userctl.logincontrol(fields,res);
        });
    }else if(path.pathname==="/inithome"){
        //    获取前台传过来的请求参数
        let data=new formidable.IncomingForm();
        data.parse(req,function (err,fields,files) {
            blogctl.bloglistctl(fields,res);
        });
    }else if(path.pathname==="/initUserInfo"){
    //    获取前台传来的数据
        let data=new formidable.IncomingForm();
        data.parse(req,function(err,fields,files){
            userctl.UserInfoControl(fields,res);
        });
    }else if(path.pathname==="/Catagory"){
        //    获取前台传来的数据
        let data=new formidable.IncomingForm();
        data.parse(req,function(err,fields,files){
            blogctl.categoryctl(fields,res);
        });
    }else if(path.pathname==="/Page"){
        //    获取前台传来的数据
        let data=new formidable.IncomingForm();
        data.parse(req,function(err,fields,files){
            blogctl.pageCount(fields,res);
        });
    }else if(path.pathname==="/readMore"){
        //    获取前台传来的数据
        let data=new formidable.IncomingForm();
        data.parse(req,function(err,fields,files){
            blogctl.readMore(fields,res);
        });
    }
    else{
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
