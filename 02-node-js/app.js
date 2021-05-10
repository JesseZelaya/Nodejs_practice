//concept of modules with pure javascript
var http = require('http'); //importing with require statement and binding to variable
var module1 = require('./module1') //imports my custom module

var module2 = require('./module2')

// This is an anonymous function
// onRequest = (request, response)=>{
//     response.writeHead(400, {'Content-Type':'text/plain'});
//     response.write(module2.myVariable);
//     module2.myFunction();
//     response.end();
// }

function onRequest(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();

}

http.createServer(onRequest).listen(8000);

