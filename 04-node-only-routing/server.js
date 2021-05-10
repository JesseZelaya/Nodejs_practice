var http = require('http');
var app = require('./app');

http.createServer(app.handlerequests).listen(8001)