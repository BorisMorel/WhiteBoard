var express = require('express');
var http = require('http');
var socket = require('socket.io');

var app = new express();
var server = http.Server(app);
var io = new socket(server);

app.use('/static', express.static(__dirname + '/resources/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/resources/views/index.html');
});

var res = server.listen(8080, function() {
    var host = res.address().address;
    var port = res.address().port;

    console.log('Listening at http://%s:%s', host, port)
});
