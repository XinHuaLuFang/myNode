/**
 * Created by xin on 2016/12/5.
 */
var util = require('util');

console.log( util.isDate(new Date()) );

console.log( util.isDate(Date()) );

console.log( util.isDate(new Date()) );

console.log( util.isDate({}) );