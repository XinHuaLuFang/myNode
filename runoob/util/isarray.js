/**
 * Created by xin on 2016/12/5.
 */
var util = require('util');

console.log(util.isArray([]));

console.log(util.isArray(new Array));

console.log(util.isArray({}));