/**
 * Created by xin on 2016/12/2.
 */
var fs = require('txt');

fs.readFile('./practice/txt/output.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('程序执行结束！');