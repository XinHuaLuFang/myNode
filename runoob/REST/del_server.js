/**
 * Created by xin on 2016/12/7.
 */
var express = require('express');
var app = express();
var fs = require('fs');

var id = 2;

app.get('/delete', function(req, res) {
    fs.readFile( __dirname + '/users.json', 'utf-8', function(err, data) {
        data = JSON.parse(data);
        delete data['user2'];
        console.log( data );
        res.end( JSON.stringify(data) );
    });
});

app.listen('8081', function() {
    console.log('Server is listening at port 8081');
});