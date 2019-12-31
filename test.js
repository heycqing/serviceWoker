var http = require('http');
var fs = require('fs');
var path = require('path');
var colors = require('colors');

var config = require('./server_config/index.config.js')

var str = './src/sw/index.js' 

function setContentType(filepath){
    var theFile = path.extname(filepath);
    theFile = theFile ? theFile.slice(1) : 'unknown';
    console.log('theFile:', theFile)
    var contentType = config.MIME_TYPE[theFile] || "text/plain";
    console.log('contentType ', contentType)
    return contentType
}

setContentType(str)