/**
 * Created by xin on 2016/12/5.
 */
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for '+ pathname + ' received.');
        route(pathname);
        response.write(pathname);
        response.end();
    };
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;