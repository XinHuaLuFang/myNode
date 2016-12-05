/**
 * Created by xin on 2016/12/5.
 */
var fs = require('txt');
var zlib = require('zlib');

fs.createReadStream('./practice/txt/input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./practice/txt/decompress.txt'));

console.log('文件解压完成！');
