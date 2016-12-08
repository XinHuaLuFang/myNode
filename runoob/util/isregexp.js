/**
 * Created by xin on 2016/12/5.
 */
var util = require('util');

console.log( util.isRegExp(/some regexp/) );

console.log( util.isRegExp(new RegExp('another regexp')) );

console.log( util.isRegExp({}) );