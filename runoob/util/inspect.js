/**
 * Created by xin on 2016/12/5.
 */
var util = require('util');
function Person() {
    this.name = 'name';
    this.toString = function() {
        return this.name;
    }
};
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true, null, true));