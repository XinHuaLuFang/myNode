/**
 * Created by xin on 2016/12/8.
 */
const fs = require('fs');
const child_process = require('child_process');

for (var i=0; i<3; i++) {
    var workerProcess = child_process.fork('runoob/thread/master_fork.js', [i]);

    workerProcess.on('close', function(code) {
        console.log('子进程已退出,退出码 ' + code);
    });
}