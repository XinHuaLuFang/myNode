/**
 * Created by xin on 2016/12/5.
 */
var util = require('util');

console.log( util.isError(new Error()) );

console.log( util.isError(new TypeError()) );

console.log( util.isError({ 'name': 'error' }) );