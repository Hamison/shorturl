var http = require('http');

http.createServer(function(request, response){

	response.writeHead(200);
	response.write("Hello, this is node.js");
	console.log("Successful output on port 8080...")
	response.end();

}).listen(8080);

console.log("Listening on port 8080...")

