/**
 * Created by xin on 2016/12/5.
 */
var server = require('./server');
var router = require('./router');

server.start(router.route);