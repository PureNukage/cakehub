const express = require('express');
const app = express();

var http = require('http');
var fs = require('fs');
/*
var server = http.createServer(function(req, res){
	//console.log("request was made: "+req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(res);
});
*/
app.get('/', (req, res) => {
	res.send("Hello world!");
});

const server = app.listen(3000, () => {
	console.log(`Express running -> PORT ${server.address().port}`);
});
