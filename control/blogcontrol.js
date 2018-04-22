"use strict";
const blogdao=require("../dao/blogdao");

function bloglistctl(fields,res) {
    var userid=fields.userid;
    blogdao.queryBlogList(userid,function (results) {
        if(results.length==0){
        //    用户没有发表博客
        //     res.writeHead(404);
        //     res.write({result:"该用户没有发表博客"});
        //     res.end();
        }else{
        //    博客列表
            var array=[];
            for(var i=0;i<results.length;i++){
                let date=new Date(results[i].createtime);
                let createtime=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay();
                array[i]={title:results[i].title,summary:results[i].summary,createtime:createtime,content:results[i].content,pageview:results[i].pageview,categoryname:results[i].categoryname};
            }
        //    将数据写出去
            res.writeHead(200);
            res.write(JSON.stringify(array));
            res.end();
        }
    });
}
function categoryctl(fields,res) {
    var userid=fields.userid;
    blogdao.queryCategory(userid,function(results){
        if(results.length==0){

        }else{
            var array=[];
            for(var i=0;i<results.length;i++){
                array[i]={categoryname:results[i].categoryname};
            }
            res.writeHead(200);
            res.write(JSON.stringify(array));
            res.end();
        }
    });
}
module.exports={bloglistctl,categoryctl};