/**
 * Created by xin on 2016/12/7.
 */
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/:id', function(req, res) {
    fs.readFile( __dirname + '/users.json', 'utf-8', function(err, data) {
        data = JSON.parse(data);
        var user = data['user' + req.params.id];
        console.log( user );
        res.end( JSON.stringify(user) );
    });
});

app.listen('8081', function() {
    console.log('Server is listening an port 8081');
});