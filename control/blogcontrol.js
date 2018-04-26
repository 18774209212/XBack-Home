"use strict";
const blogdao=require("../dao/blogdao");

function bloglistctl(fields,res) {
    var userid=fields.userid;
    var pageIndex=fields.pageIndex;
    blogdao.queryBlogList(userid,pageIndex,function (results) {
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
                let createtime=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
                array[i]={id:results[i].id,title:results[i].title,summary:results[i].summary,createtime:createtime,content:results[i].content,pageview:results[i].pageview,categoryname:results[i].categoryname};
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
function pageCount(fields,res){
    var userid=fields.userid;
    blogdao.queryPageCount(userid,function(results){
       res.writeHead(200);
       res.write(JSON.stringify({"pageCount":results[0].pageCount}));
       res.end();
    });
}
function readMore(fields,res) {
    var blogId=fields.blogId;
    blogdao.queryBloginfo(blogId,function(results){
        let date=new Date(results[0].createtime);
        let time=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        res.writeHead(200);
        res.write(JSON.stringify({title:results[0].title,createtime:time,pageview:results[0].pageview,content:results[0].content}));
        res.end();
    });
}
module.exports={bloglistctl,categoryctl,pageCount,readMore};