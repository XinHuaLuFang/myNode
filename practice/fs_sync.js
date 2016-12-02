/**
 * Created by xin on 2016/12/2.
 */
var fs = require('fs');

var data = fs.readFileSync('./practice/fs/output.txt');

console.log(data.toString());
console.log('程序执行结束！');