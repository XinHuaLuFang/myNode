/**
 * Created by xin on 2016/12/5.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
}).listen(8081);