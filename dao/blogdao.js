"use strict";
const mysql=require("mysql");
const tool=require("../common/tool");
//查询博客列表
function queryBlogList(userid,pageIndex,callback) {
    //连接数据库
    let con=tool.getconnection();
    let start=(pageIndex-1)*6;
    let end=(pageIndex-1)*6+6;
    //第四步：进行增删查改操作
    con.query("select bloginfo.id,title,summary,content,createtime,pageview,categoryname from bloginfo inner join category on bloginfo.categoryid=category.id where bloginfo.userid="+userid+" order by pageview DESC limit ?,?",[start,end],function(err,results,fields){
        if(err) throw err;
        //由于这是一个回调函数，不能直接将results返回，因此可以通过返回一个callback的形式将结果返回出去
        callback(results);
    });
}
function queryCategory(userid,callback) {
    //连接数据库
    let con=tool.getconnection();
    //第四步：进行增删查改操作
    con.query("select categoryname from category where ?",{userid:userid},function(err,results){
        callback(results);
    });
}
function queryPageCount(userid,callback){
    //连接数据库
    let con=tool.getconnection();
    //第四步：进行增删查改操作
    con.query("select count(*)pageCount from bloginfo where ?",{userid:userid},function(err,results){
        callback(results);
    });
}
function queryBloginfo(blogId,callback){
    //连接数据库
    let con=tool.getconnection();
    //第四步：进行增删查改操作
    con.query("select title,content,createtime,pageview from bloginfo where ?",{id:blogId},function(err,results){
        callback(results);
    });
}
module.exports={queryBlogList,queryCategory,queryPageCount,queryBloginfo};