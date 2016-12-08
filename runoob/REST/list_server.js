/**
 * Created by xin on 2016/12/7.
 */
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req, res) {
    fs.readFile( __dirname + '/' + 'users.json', 'utf-8', function(err, data) {
        console.log(data);
        res.end(data);
    })
});

app.listen(8081);