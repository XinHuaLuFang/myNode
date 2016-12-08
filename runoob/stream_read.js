/**
 * Created by xin on 2016/12/2.
 */
var fs = require('txt');
var data = '';

var readStream = fs.createReadStream('./runoob/txt/output.txt');
readStream.setEncoding('UTF-8');

readStream.on('data', function(chunk) {
    data += chunk;
    console.log(chunk.length);
});

readStream.on('end', function() {
   console.log(data);
});

readStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('程序执行完毕！');