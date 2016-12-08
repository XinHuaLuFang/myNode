/**
 * Created by xin on 2016/12/5.
 */
var fs = require('txt');

var readStream = fs.createReadStream('./runoob/txt/output.txt');

var writeStream = fs.createWriteStream('./runoob/txt/pipe.txt');

readStream.pipe(writeStream);

console.log('程序执行完毕！');