const req = require('express/lib/request');
var http = require('http');

// Create a server
 const server=http.createServer((request, response)=>{

	// Sends a chunk of the response body
    req.writeHeader()
	response.write('Hello World!');

	// Signals the server that all of
	// the response headers and body
	// have been sent
response.end();
});
server.listen(3000,()=>
{
    console.log("listening the port 3000")
}); // Server listening on port 3000
