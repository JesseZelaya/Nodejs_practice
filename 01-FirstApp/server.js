var http = require('http');

//function for whenever requests come in
//for this nothing is done with the request; only the response
function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Sloth!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    response.end();

}

http.createServer(onRequest).listen(8000)


