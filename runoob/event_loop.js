/**
 * Created by xin on 2016/12/2.
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {
    console.log('some_event 事件触发了。');
});

setTimeout(function() {
    event.emit('some_event');
}, 1500);