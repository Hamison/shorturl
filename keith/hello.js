var http = require('http');

http.createServer(function(request, response){

	response.writeHead(200);
	response.write("Hello, this is node.js");
	response.write(makeid());
	console.log("Successful output on port 8080...")
	response.end();

}).listen(8080);

console.log("Listening on port 8080...")

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}