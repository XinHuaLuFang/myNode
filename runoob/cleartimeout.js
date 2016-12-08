/**
 * Created by xin on 2016/12/5.
 */
function printHello() {
    console.log('Hello World!');
}

t = setTimeout(printHello, 2000);

clearTimeout(t);