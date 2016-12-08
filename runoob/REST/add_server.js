/**
 * Created by xin on 2016/12/7.
 */
var express = require('express');
var app = express();
var fs = require('fs');

//添加的新用户数据
var user = {
    'user4': {
        'name': 'mohit',
        'password': 'password4',
        'profession': 'teacher',
        'id': 4
    }
};

app.get('/addUser', function(req, res) {
    fs.readFile( __dirname + '/' + 'users.json', 'utf-8', function(err, data) {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end( JSON.stringify(data) );
    });
});

app.listen(8081, function() {
    console.log('Server listen an port 8081');
});