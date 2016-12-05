/**
 * Created by xin on 2016/12/5.
 */
var fs = require('txt');
var zlib = require('zlib');

fs.createReadStream('./practice/txt/output.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./practice/txt/input.txt.gz'));

console.log('压缩文件完成！');