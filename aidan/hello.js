var http = require('http');

http.createServer(function(request, response){

	response.writeHead(200);
	response.write("Hello, this is node.js");
	console.log("Successful output on port 8080...")
	response.end();

}).listen(8080);
console.log("Listening on port 8080...")

http.createServer(function(request, response){

	response.writeHead(200);
	response.write("Hello, this is port 3000");
	console.log("Successful output on port 3000...")
	response.end();

}).listen(3000);
console.log("Listening on port 3000...")

setInterval(function(){ 
	console.log("Nothing happened..."); 
}, 2000);



