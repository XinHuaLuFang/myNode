/**
 * Created by xin on 2016/12/2.
 */
var fs = require('txt');
var data = '这是一个文本文件。';

var writeStream = fs.createWriteStream('./practice/txt/input.txt');
writeStream.write(data, "UTF8");
writeStream.end();

writeStream.on('finish', function() {
   console.log('写入完成。');
});

writeStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('程序执行完毕！');