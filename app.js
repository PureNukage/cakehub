
var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("my linkies stay super stinky 1k eoy!");
});

server.listen(3000);




/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("request was made: "+req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
	myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
*/
