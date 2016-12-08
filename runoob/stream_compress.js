/**
 * Created by xin on 2016/12/5.
 */
var fs = require('txt');
var zlib = require('zlib');

fs.createReadStream('./runoob/txt/output.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./runoob/txt/input.txt.gz'));

console.log('压缩文件完成！');