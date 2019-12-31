var http = require('http');
var fs = require('fs');
var path = require('path');
var colors = require('colors');

var config = require('./server_config/index.config.js')

function setContentType(filepath){
    var theFile = path.extname(filepath);
    theFile = theFile ? theFile.slice(1) : 'unknown';
    var contentType = config.MIME_TYPE[theFile] || "text/plain";
    return contentType
}


function http_server(req,res){

    console.log (colors.green("本地 server 启动....\n"));

    var filePath = config.baseConfig.tureUrl(req.url);  
    fs.readFile(filePath, 'utf8',function(err,data){
        if(err){
            res.writeHead( 404 ,{
                'content-type' : 'text/html;charset="utf-8" '
            });
            res.write('<h1>404错误，找不到页面</h1><p>'+err+'</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : setContentType(filePath)
            });
            res.write(data);
            res.end();
        }   
    })
}

http.createServer(http_server).listen(config.baseConfig.prot);

console.log('在浏览器中输入: ' +colors.blue('http://localhost:8888/index.html\n'))
