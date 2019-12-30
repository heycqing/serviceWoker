var http = require('http');
var fs = require('fs');
var path = require('path');
var colors = require('colors');
var config = {
    prot:8888,
    www: './src/sw',
    tureUrl: function(e){
        return this.www + e;
    }
}
http.createServer(function(req,res){
    console.log (colors.green("本地 server 启动....\n"));
    var file = config.tureUrl(req.url);    
    fs.readFile( file ,function(err,data){
        if(err){
            res.writeHead( 404 ,{
                'content-type' : 'text/html;charset="utf-8" '
            });
            res.write('<h1>404错误，找不到页面</h1>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }   
    })
}).listen(config.prot);
console.log('在浏览器中输入: ' +colors.blue('http://127.0.0.1:8888/index.html\n'))
