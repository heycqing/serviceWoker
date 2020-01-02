var http = require('http');
var fs = require('fs');
var path = require('path');
var colors = require('colors');

var config = require('./server_config/index.config.js')

function isImg(filepath){
    var theFile = path.extname(filepath);
    theFile = theFile ? theFile.slice(1) : 'unknown';
    return config.isImg.indexOf(theFile) !== -1 ? true : false
}

function setContentType(filepath){
    var theFile = path.extname(filepath);
    theFile = theFile ? theFile.slice(1) : 'unknown';
    var contentType = config.MIME_TYPE[theFile] || "text/plain";
    return contentType
}

let count = 0 

function http_server(req,res){

    console.log (colors.green("本地 server 第"+(count++)+"次启动....\n"));

    var filePath = config.baseConfig.tureUrl(req.url);  
    
    if(isImg(filePath)){
        readImg(filePath, res)
    }else{
        readText(filePath, res)
    }
    
    
}

function readText(filePath, res){
    fs.readFile(filePath, 'utf8',function(err,data){
        if(err){
            server404(res,err)
        }else{
            res.writeHeader(200,{
                'content-type' : setContentType(filePath)
            });
            res.write(data);
            res.end();
        }   
    })
}

function readImg(filePath, res){
    fs.readFile(filePath,'binary',function(err,  data)  {
        if  (err)  {
            server404(res,err)
            return;
        }else{
            res.writeHeader(200,{
                'content-type' : setContentType(filePath)
            });
            res.write(data,'binary');
            res.end();
        }
    });
}

function server404(res){
    res.writeHead( 404 ,{
        'content-type' : 'text/html;charset="utf-8" '
    });
    res.write('<h1>404错误，找不到页面</h1><p>'+err+'</p>');
    res.end();
}

http.createServer(http_server).listen(config.baseConfig.prot);

console.log('在浏览器中输入: ' +colors.blue('http://localhost:8888/index.html\n'))
