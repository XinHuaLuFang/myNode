/**
 * Created by xin on 2016/12/5.
 */
var fs = require('fs');
var buf = Buffer.alloc(30);

console.log('准备打开已存在的文件！');
fs.open('./practice/txt/output.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('文件打开成功。');
    console.log('准备读取文件: ');
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead, buffer) {
        if (err) {
            console.error(err);
        }
        console.log(bytesRead + ' 字节被读取。');
        if (bytesRead > 0) {
            console.log(buf.toString());
        }
        // 关闭文件
        fs.close(fd, function(err) {
            if (err) {
                console.error(err);
            }
        });
        console.log('文件关闭成功！');
    });
});