//passed request from server to app

//gives helper functions for url
var url = require('url');

var fs = require('fs');

function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
        if (error){
            response.writeHead(404);
            response.write('File not found!');
        }else{
            response.write(data);
        }
        response.end();
    });


}

module.exports = {
    handlerequests: function(request, response){
        response.writeHead(200, {'Content-Type': 'text/html'});

        // routes index and login
        var path = url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderHTML('./index.html', response);
                break;
            case '/login':
                renderHTML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();


        }
    }
};