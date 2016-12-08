/**
 * Created by xin on 2016/12/7.
 */
var http = require('http');

var options = {
    'host': 'localhost',
    'port': '8081',
    'path': '/runoob/html/index.html'
};

var callback = function(response) {
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
};

var req = http.request(options, callback);
req.end();